import { combineReducers } from 'redux'
import { fileRunsReducer } from './reducers/fileRunsReducer'
import { codeFilesReducer } from './reducers/codeFilesReducer'
import { activeFrameReducer } from './reducers/activeFrameReducer'
import { frameVarsDataDictReducer } from './reducers/frameVarsDataDictReducer'
import { codeStoryReducer } from './reducers/codeStoryReducer'
import { scopeVarsReducer } from './reducers/scopeVarsReducer'
// -- import_hook -- 

export const rootReducer = combineReducers({
  fileRuns : fileRunsReducer,
  codeFiles : codeFilesReducer,
  activeFrame : activeFrameReducer,
  frameVarsDataDict : frameVarsDataDictReducer,
  codeStory : codeStoryReducer,
  scopeVars : scopeVarsReducer,
  // -- reducerLine_hook -- 
})
