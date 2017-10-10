import React from 'react'
import K from '../../cpu/keyCodes'
import Key from '../../containers/Key'
import './Keypad.css'

export default function ShiftDownKeypad() {
  return (
    <div className="Keypad">
      <div className="Keypad--row">
        <Key keyCode={K.LN} />
        <Key keyCode={K.EXP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.RESET} />
      </div>
      <div className="Keypad--row">
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
      </div>
      <div className="Keypad--row">
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NPR} />
        <Key keyCode={K.PCTCHG} />
      </div>
      <div className="Keypad--row">
        <Key keyCode={K.NOOP} className="Key--keyCode-enter" />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
      </div>
      <div className="Keypad--row">
        <Key keyCode={K.CONST} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
      </div>
      <div className="Keypad--row">
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
      </div>
      <div className="Keypad--row">
        <Key keyCode={K.SHIFT_DOWN} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
      </div>
      <div className="Keypad--row">
        <Key keyCode={K.CANCEL} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
        <Key keyCode={K.NOOP} />
      </div>
    </div>
  )
}