import * as types from '../../store/types'

export function nextCalled() {

  return function (dispatch, getState) {
    const state = getState();
    // dispatch({
    //   type: types.DEBUG_NEXT_CALLED
    // });

    if(!lineSeqEndReached(state))
    {
      dispatch({
        type: types.INCREMENT_ACTIVE_LINE
      });
      return;
    }

    if(fileRunEndReached(state))
      return;

    dispatch({
      type: types.INCREMENT_ACTIVE_FILERUN
    });

  };
}

function lineSeqEndReached(state)
{

  const curRunIdx = state.activeFrame.fileRunIdx;
  const lineIdx = state.activeFrame.lineSeqIdx;
  const lineSeqLen = state.activeFrame.maxLineSeqs[curRunIdx];
  return ( lineIdx + 1 >= lineSeqLen );
}

function fileRunEndReached(state)
{
  const curRunIdx = state.activeFrame.fileRunIdx;
  return ( curRunIdx + 1 >= state.activeFrame.maxFileRuns ) ;
}


function isAtFileStartPosition(state)
{
  const lineIdx = state.activeFrame.lineSeqIdx;
  return  (lineIdx -1  >= 0) ; 
}

function isAtFirstFileRun(state)
{
  const curRunIdx = state.activeFrame.fileRunIdx;
  return  ( curRunIdx <= 0 );
}

export function prevCalled() {
  return function (dispatch, getState) {
    const state = getState();

    // dispatch({
    //   type: types.DEBUG_PREV_CALLED
    // });

    if(isAtFileStartPosition(state))
    {
      dispatch({
        type: types.DECREMENT_ACTIVE_LINE
      });

      return;
    }

    if(isAtFirstFileRun(state))
      return;

    dispatch({
      type: types.DECREMENT_ACTIVE_FILERUN
    });

  };

}

// -- new_actionCreator_hook --
