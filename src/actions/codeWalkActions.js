import * as types from 'store/types'
import * as selectors from 'selectors/codeWalkSelectors';
import {fetchCodeWalkData} from 'actions/dataLoadActions';
let axios = require('axios');

export function nextCalled() {

  return function (dispatch, getState) {
    const state = getState();

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

    if(selectors.isAtFirstFileRun(state))
      return;

    dispatch({
      type: types.DECREMENT_ACTIVE_FILERUN,
    });

  };

}

export function stepCalled() {

  return fetchCodeWalkData();
}
// -- new_actionCreator_hook --
