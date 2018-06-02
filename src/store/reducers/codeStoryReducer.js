import initialState from '../initialState'
import * as types from '../types'
// -- import_hook --

export function codeStoryReducer(state = initialState.codeStory, action) {
  switch (action.type) {

    case types.CODESTORY_RECIEVED:
      if(action.payload == undefined ||  Object.keys(action.payload).length == 0)
        return initialState.codeStory;
      return action.payload;

    default:
      return state
  }
}

