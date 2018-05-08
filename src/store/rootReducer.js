import { combineReducers } from 'redux'
import { fileRunsReducer } from './reducers/fileRunsReducer'
import { codeFilesReducer } from './reducers/codeFilesReducer'
import { activeFrameReducer } from './reducers/activeFrameReducer'
// -- import_hook -- 

export const rootReducer = combineReducers({
  fileRuns : fileRunsReducer,
  codeFiles : codeFilesReducer,
  activeFrame : activeFrameReducer,
  // -- reducerLine_hook -- 
})

export function getFullActiveFrame(store)
{
  const frame = store.activeFrame;
  const codeFile = store.codeFiles[frame.fileName];
  
  return {...frame, code: codeFile.code}
}
