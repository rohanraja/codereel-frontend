import * as types from './types'

export function nextCalled() {
  return {
    type: types.INCREMENT_ACTIVE_LINE
  }
}
