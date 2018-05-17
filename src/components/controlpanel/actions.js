import * as types from '../../store/types'
import * as selectors from './selectors';

export function nextCalled() {

  return function (dispatch, getState) {
    const state = getState();
    // dispatch({
    //   type: types.DEBUG_NEXT_CALLED
    // });

    if(!selectors.lineSeqEndReached(state))
    {
      dispatch({
        type: types.INCREMENT_ACTIVE_LINE
      });
      return;
    }

    if(selectors.fileRunEndReached(state))
      return;

    dispatch({
      type: types.INCREMENT_ACTIVE_FILERUN
    });

  };
}



export function prevCalled() {
  return function (dispatch, getState) {
    const state = getState();

    // dispatch({
    //   type: types.DEBUG_PREV_CALLED
    // });

    if(selectors.isAtFileStartPosition(state))
    {
      dispatch({
        type: types.DECREMENT_ACTIVE_LINE
      });

      return;
    }

    if(selectors.isAtFirstFileRun(state))
      return;

    dispatch({
      type: types.DECREMENT_ACTIVE_FILERUN,
      payload: selectors.getPrevActievLineSeqLength(state) - 1
    });

  };

}

// -- new_actionCreator_hook --
