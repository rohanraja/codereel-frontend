import { combineReducers } from 'redux'
import { lineIncReducer } from '../components/controlpanel/reducers'
// -- import_hook -- 

export const rootReducer = combineReducers({
  activeLineNo: lineIncReducer,
  // -- reducerLine_hook -- 
})

