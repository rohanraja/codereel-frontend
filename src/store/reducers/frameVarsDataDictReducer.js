import initialState from '../initialState'
import * as types from '../types'
// -- import_hook --

export function frameVarsDataDictReducer(state = initialState.frameVarsDataDict, action) {
  switch (action.type) {

    case types.FRAMEVARSDICT_RECIEVED:
      if(action.payload == undefined ||  Object.keys(action.payload).length == 0)
        return initialState.frameVarsDataDict;
      return action.payload;

    default:
      return state
  }
}

