import initialState from '../initialState'
import * as types from '../types'
// -- import_hook --

export function codeFilesReducer(state = initialState.codeFiles, action) {
  switch (action.type) {
    case types.CODEFILES_RECIEVED:
      return action.payload;

    default:
      return state
  }
}

