import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import K from '../cpu/keyCodes'
import Key from './Key'
import { setShiftKey, shiftKeySelector } from '../ducks/ui'
import { executeKeyCode } from '../cpu/reducer'
import mapKeyboardEvent from '../cpu/keyboardEventMapper'
import './Keypad.css'

class Keypad extends React.PureComponent {

  state = {
    shiftKey: null
  }

  static propTypes = {
    executeKeyCode: PropTypes.func,
    setShiftKey: PropTypes.func.isRequired,
    shiftKey: PropTypes.string
  }

  keyUpHandler = ev => {
    const { shiftKey, setShiftKey, executeKeyCode } = this.props
    const keyCode = mapKeyboardEvent(ev)
    if (keyCode) {
      if (shiftKey) {
        setShiftKey(null)
      }
      executeKeyCode(keyCode)
    }
  }

  keyDownHandler = ev => {
    console.log(ev)
    const { setShiftKey } = this.props
    if (ev.key === 'Shift') {
      ev.preventDefault()
      setShiftKey(K.SHIFT_UP)
    } else if (ev.key === 'Alt') {
      ev.preventDefault()
      setShiftKey(K.SHIFT_DOWN)
    }
  }

  bodyKeyUpHandler = ev => {
    const { shiftKey, setShiftKey } = this.props
    ev.preventDefault()
    if (ev.key === 'Shift' && shiftKey === K.SHIFT_UP) {
      setShiftKey(null)
    } else if (ev.key === 'Alt' && shiftKey === K.SHIFT_DOWN) {
      setShiftKey(null)
    }
  }

  bodyKeyDownHandler = ev => {
    const { setShiftKey } = this.props
    if (ev.key === 'Shift') {
      ev.preventDefault()
      setShiftKey(K.SHIFT_UP)
    } else if (ev.key === 'Alt') {
      ev.preventDefault()
      setShiftKey(K.SHIFT_DOWN)
    }
  }

  componentDidMount() {
    const elem = document.querySelector('.CalculatorPanel')
    if (elem) {
      elem.addEventListener('keyup', this.keyUpHandler)
    }
    document.body.addEventListener('keyup', this.bodyKeyUpHandler)
    document.body.addEventListener('keydown', this.bodyKeyDownHandler)
  }

  componentWillUnmount() {
    const elem = document.querySelector('.CalculatorPanel')
    if (elem) {
      elem.removeEventListener('keyup', this.keyUpHandler)
    }
    document.body.removeEventListener('keyup', this.bodyKeyUpHandler)
    document.body.removeEventListener('keydown', this.bodyKeyDownHandler)
  }

  render() {
    return (
      <div className="Keypad">
        <div className="Keypad--row">
          <Key keyCode={K.POW} />
          <Key keyCode={K.LOG} />
          <Key keyCode={K.LN} />
          <Key keyCode={K.EXP} shiftCodes={{ [K.SHIFT_UP]: K.ALOG }} />
          <Key keyCode={K.CLR} />
        </div>
        <div className="Keypad--row">
          <Key keyCode={K.SQRT} />
          <Key keyCode={K.SQR} />
          <Key keyCode={K.SIN} shiftCodes={{ [K.SHIFT_DOWN]: K.ASIN }} />
          <Key keyCode={K.COS} shiftCodes={{ [K.SHIFT_DOWN]: K.ACOS }} />
          <Key keyCode={K.TAN} shiftCodes={{ [K.SHIFT_DOWN]: K.ATAN }} />
        </div>
        <div className="Keypad--row">
          <Key keyCode={K.SWAP} />
          <Key keyCode={K.ROLL_DOWN} />
          <Key keyCode={K.INV} />
          <Key keyCode={K.FACT} shiftCodes={{ [K.SHIFT_UP]: K.NCR, [K.SHIFT_DOWN]: K.NPR }} />
          <Key keyCode={K.PCT} shiftCodes={{ [K.SHIFT_DOWN]: K.PCTCHG }} />
        </div>
        <div className="Keypad--row">
          <Key keyCode={K.ENTER} />
          <Key keyCode={K.CHS} />
          <Key keyCode={K.EEX} />
          <Key keyCode={K.CLX} />
        </div>
        <div className="Keypad--row">
          <Key keyCode={K.MEM} shiftCodes={{ [K.SHIFT_DOWN]: K.CONST, [K.SHIFT_UP]: K.CONV }} />
          <Key keyCode={K.D7} />
          <Key keyCode={K.D8} />
          <Key keyCode={K.D9} />
          <Key keyCode={K.DIV} />
        </div>
        <div className="Keypad--row">
          <Key keyCode={K.SHIFT_UP} />
          <Key keyCode={K.D4} />
          <Key keyCode={K.D5} />
          <Key keyCode={K.D6} />
          <Key keyCode={K.MUL} />
        </div>
        <div className="Keypad--row">
          <Key keyCode={K.SHIFT_DOWN} />
          <Key keyCode={K.D1} />
          <Key keyCode={K.D2} />
          <Key keyCode={K.D3} />
          <Key keyCode={K.SUB} />
        </div>
        <div className="Keypad--row">
          <Key keyCode={K.CANCEL} />
          <Key keyCode={K.D0} />
          <Key keyCode={K.DOT} />
          <Key keyCode={K.PI} />
          <Key keyCode={K.ADD} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    executeKeyCode,
    setShiftKey,
  }, dispatch)

const mapStateToProps = state => ({
  shiftKey: shiftKeySelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Keypad)