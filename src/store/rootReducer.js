import { combineReducers } from 'redux'
import { lineIncReducer } from '../components/controlpanel/reducers'
import { Code_headerReducer } from '../components/Code_header/reducers'
import { codeReducer } from '../components/Code_header/reducers'
// -- import_hook -- 

export const rootReducer = combineReducers({
  activeLineNo: lineIncReducer,
  activeFileName: Code_headerReducer,
  code : codeReducer,
  // -- reducerLine_hook -- 
})

