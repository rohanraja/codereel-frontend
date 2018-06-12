import initialState from '../initialState'
import * as types from '../types'
// -- import_hook --

export function scopeVarsReducer(state = initialState.scopeVars, action) {
  switch (action.type) {

    case types.SCOPEVARS_RECIEVED:
      if(action.payload == undefined ||  Object.keys(action.payload).length == 0)
        return initialState.scopeVars;
      return action.payload;

    default:
      return state
  }
}

