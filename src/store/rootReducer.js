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



export function getCurrentFileRun(store)
{
  const frame = store.activeFrame;
  const fRunIdx = frame.fileRunIdx;

  return store.fileRuns[fRunIdx];
}

export function getCurrentLineSeqIdx(store)
{
  const frame = store.activeFrame;
  return frame.lineSeqIdx;
}


export function getFullActiveFrame(store)
{
  const currentFileRun = getCurrentFileRun(store);
  const lineIdx = getCurrentLineSeqIdx(store);
  const codeFileName = currentFileRun.fileName;
  const codeFile = store.codeFiles[codeFileName];
  const lineNo = currentFileRun.lineSequence[lineIdx]

  const fullFrame = {
    fileName: codeFileName,
    code: codeFile.code,
    lineNo: lineNo
  };

  return fullFrame;
}
