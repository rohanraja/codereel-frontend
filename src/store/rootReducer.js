import { combineReducers } from 'redux'
import { lineIncReducer } from '../components/controlpanel/reducers'

export const rootReducer = combineReducers({
  activeLineNo: lineIncReducer
})

