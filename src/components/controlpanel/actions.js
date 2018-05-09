import * as types from '../../store/types'

export function nextCalled() {

  return function (dispatch, getState) {
    const state = getState();

    const curRunIdx = state.activeFrame.fileRunIdx;
    const lineIdx = state.activeFrame.lineSeqIdx;
    if( lineIdx + 1 < state.activeFrame.maxLineSeqs[curRunIdx])
    {
      dispatch({
        type: types.INCREMENT_ACTIVE_LINE
      });

      return;
    }

    if( curRunIdx + 1 >= state.activeFrame.maxFileRuns)
      return;

    dispatch({
      type: types.INCREMENT_ACTIVE_FILERUN
    });

  };
}

export function prevCalled() {
  return function (dispatch, getState) {
    const state = getState();

    const curRunIdx = state.activeFrame.fileRunIdx;
    const lineIdx = state.activeFrame.lineSeqIdx;
    if( lineIdx -1  >= 0 )
    {
      dispatch({
        type: types.DECREMENT_ACTIVE_LINE
      });

      return;
    }

    if( curRunIdx  <= 0 )
      return;

    dispatch({
      type: types.DECREMENT_ACTIVE_FILERUN
    });

  };

  return function (dispatch, getState) {
    const state = getState();

    dispatch({
      type: types.DECREMENT_ACTIVE_LINE
    });

  };
}

// -- new_actionCreator_hook --
