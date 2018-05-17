import initialState from '../initialState'
import * as types from '../types'
// -- import_hook --

export function fileRunsReducer(state = initialState.fileRuns, action) {
  switch (action.type) {

    case types.FILERUNS_RECIEVED:
      return action.payload;

    default:
      return state
  }
}

