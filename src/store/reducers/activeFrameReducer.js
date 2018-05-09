import initialState from '../initialState'
import * as types from '../types'
// -- import_hook --

export function activeFrameReducer(state = initialState.activeFrame, action) {
  switch (action.type) {
    case types.INCREMENT_ACTIVE_LINE:
      return {...state , lineSeqIdx: state.lineSeqIdx + 1 };
    
    case types.DECREMENT_ACTIVE_LINE:
      return {...state , lineSeqIdx: state.lineSeqIdx - 1 };

    case types.INCREMENT_ACTIVE_FILERUN:
      return {...state , fileRunIdx: state.fileRunIdx + 1 , lineSeqIdx: 0 };
    
    case types.DECREMENT_ACTIVE_FILERUN:
      return {...state , fileRunIdx: state.fileRunIdx - 1 , lineSeqIdx: state.maxLineSeqs[state.fileRunIdx - 1] - 1 };

    default:
      return state
  }
}

