import initialState from '../initialState'
import * as types from '../types'
// -- import_hook --

export function fileRunsReducer(state = initialState.fileRuns, action) {
  switch (action.type) {

    case types.FILERUNS_RECIEVED:
      if(action.payload == undefined ||  Object.keys(action.payload).length == 0)
        return initialState.fileRuns;
      return action.payload;

    default:
      return state
  }
}

