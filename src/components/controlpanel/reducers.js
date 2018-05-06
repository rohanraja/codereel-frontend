import initialState from '../../store/initialState'
import * as types from './types'
// -- import_hook -- 

export function lineIncReducer(state = initialState.activeLineNo, action) {
  switch (action.type) {
    case types.INCREMENT_ACTIVE_LINE:
      return state+1;
    
    case types.DECREMENT_ACTIVE_LINE:
      return state-1;

    default:
      return state
  }
}

// -- newmethod_hook --
