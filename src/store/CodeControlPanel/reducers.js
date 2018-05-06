import initialState from '../../store/initialState'
import * as types from './types'

export function lineIncReducer(state = initialState.activeLineNo, action) {
  switch (action.type) {
    case types.INCREMENT_ACTIVE_LINE:
      return state+1;
    
    default:
      return state
  }
}
