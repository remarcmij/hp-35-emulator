import * as C from './keyCodes'
import input from './instructions/input'
import stack from './instructions/stack'
import math from './instructions/math'

const arcMap = {
  [C.SIN]: C.ASIN,
  [C.COS]: C.ACOS,
  [C.TAN]: C.ATAN
}

const instructions = {
  ...input,
  ...stack,
  ...math,
  [C.ARC]: {
    entry: null,
    stackLift: null,
    fn: state => state
  }
}

const liftStack = state => {
  const [x, y, z] = state.stack
  return {
    ...state,
    stack: [x, x, y, z]
  }
}

// Make sure two ARC's in a row cancel each other out
const lastKey = (state, keyCode) => keyCode === C.ARC && state.lastKey === C.ARC ? null : keyCode

/*
  The  operations Enter, CLX and CLS disable stack lift.
  C number keyed in after one of these disabling operations writes over the number
  currently in the X–register. The Y–, Z– and T–registers remain unchanged.
*/
export function execute(state, keyCode) {
  if (state.lastKey === C.ARC && arcMap[keyCode]) {
    keyCode = arcMap[keyCode]
  }

  const instruction = instructions[keyCode]
  if (!instruction) {
    console.error(`execute: not implemented [${keyCode}]`)
    return state
  }

  const { entry, stackLift, fn } = instruction

  if (entry) {
    state = state.stackLift === true ? liftStack(state) : state
  }

  return {
    ...fn(state),
    lastKey: lastKey(state, keyCode),
    entry: entry !== null ? entry : state.entry,
    stackLift: stackLift !== null ? stackLift : state.stackLift
  }
}
