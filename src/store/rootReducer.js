import { combineReducers } from 'redux'
import { lineIncReducer } from './CodeControlPanel/reducers'

export const rootReducer = combineReducers({
  activeLineNo: lineIncReducer
})

