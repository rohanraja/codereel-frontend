import * as types from './types'

export function nextCalled() {
  return {
    type: types.INCREMENT_ACTIVE_LINE
  }
}

export function prevCalled() {
  return {
    type: types.DECREMENT_ACTIVE_LINE
  }
}
