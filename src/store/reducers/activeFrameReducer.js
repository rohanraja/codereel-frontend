import initialState from '../initialState'
import * as types from '../types'
// -- import_hook --

export function activeFrameReducer(state = initialState.activeFrame, action) {
  switch (action.type) {
    case types.INCREMENT_ACTIVE_FILERUN:
      return {...state , fileRunIdx: state.fileRunIdx + 1 , threadPosition: state.threadPosition + 1};
    
    case types.DECREMENT_ACTIVE_FILERUN:
      return {...state , fileRunIdx: state.fileRunIdx - 1 , threadPosition: state.threadPosition - 1};

    case types.UPDATE_TIME_STAMP:
      return {...state , timeStamp: action.payload};

    case types.UPDATE_ACTIVE_THREAD:
      return {...state , threadId: action.payload.newThreadId, threadPosition: action.payload.threadPos } 

    default:
      return state
  }
}

