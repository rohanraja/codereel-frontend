import * as types from 'store/types'
import * as selectors from 'selectors/threadRunSelectors';
import {fetchCodeWalkData} from 'actions/dataLoadActions';
import {getActiveFrameTimeStamp} from 'selectors/threadRunSelectors';
let axios = require('axios');

export function nextCalled() {

  return function (dispatch, getState) {
    const state = getState();

    if(selectors.isAtLastCodeFrame(state))
      return;

    dispatch({
      type: types.INCREMENT_ACTIVE_FILERUN
    });

    updateTimeStamp()(dispatch, getState);

  };
}

export function updateTimeStamp(){

  return function (dispatch, getState) {
    const state = getState();
    const timeStamp = getActiveFrameTimeStamp(state);

    dispatch({
      type: types.UPDATE_TIME_STAMP,
      payload: timeStamp
    });


  };
}



export function prevCalled() {
  return function (dispatch, getState) {
    const state = getState();

    if(selectors.isAtFirstCodeFrame(state))
      return;

    dispatch({
      type: types.DECREMENT_ACTIVE_FILERUN,
    });

    updateTimeStamp()(dispatch, getState);
  };

}

export function stepCalled() {

  return fetchCodeWalkData();
}
// -- new_actionCreator_hook --
