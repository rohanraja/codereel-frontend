import initialState from '../initialState'
import * as types from '../types'
// -- import_hook --

export function codeFilesReducer(state = initialState.codeFiles, action) {
  switch (action.type) {
    case types.CODEFILES_RECIEVED:
      if(action.payload == undefined ||  Object.keys(action.payload).length == 0)
        return initialState.codeFiles;
      return action.payload;

    default:
      return state
  }
}

