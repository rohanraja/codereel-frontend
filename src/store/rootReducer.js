import { combineReducers } from 'redux'
import { activeFrameReducer } from '../components/controlpanel/reducers'
import { Code_headerReducer } from '../components/Code_header/reducers'
import { codeReducer } from '../components/Code_header/reducers'
import { createSelector } from 'reselect'
// -- import_hook -- 

export const rootReducer = combineReducers({
  activeFrame: activeFrameReducer,
  codeFiles: codeReducer
  // -- reducerLine_hook -- 
})

export function getFullActiveFrame(store)
{
  const frame = store.activeFrame;
  const codeFile = store.codeFiles[frame.fileName];
  
  return {...frame, code: codeFile.code}
}
