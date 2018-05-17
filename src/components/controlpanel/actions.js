import * as types from '../../store/types'
import * as selectors from './selectors';
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
  return function (dispatch, getState) {
    const state = getState();

    const codeFilesUrl = "https://jsonplaceholder.typicode.com/posts/1";
    const fileRunsUrl = "https://jsonplaceholder.typicode.com/posts/1";

    axios.get(codeFilesUrl).then(
        (response) => {
            dispatch({
              type: types.CODEFILES_RECIEVED,
              payload: response.data
            });
        },
        (err) => {
            console.log(err);
        }
    );

    axios.get(fileRunsUrl).then(
        (response) => {
            dispatch({
              type: types.FILERUNS_RECIEVED,
              payload: response.data
            });
        },
        (err) => {
            console.log(err);
        }
    );

  };

}
// -- new_actionCreator_hook --
