import { combineReducers } from 'redux'
import { fileRunsReducer } from './reducers/fileRunsReducer'
import { codeFilesReducer } from './reducers/codeFilesReducer'
import { activeFrameReducer } from './reducers/activeFrameReducer'
import { frameVarsDataDictReducer } from './reducers/frameVarsDataDictReducer'
// -- import_hook -- 

export const rootReducer = combineReducers({
  fileRuns : fileRunsReducer,
  codeFiles : codeFilesReducer,
  activeFrame : activeFrameReducer,
  frameVarsDataDict : frameVarsDataDictReducer,
  // -- reducerLine_hook -- 
})
