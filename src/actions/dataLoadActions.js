import * as types from 'store/types'
let axios = require('axios');

export function fetchCodeWalkData() {
  return function (dispatch, getState) {
    const state = getState();

    const codeFilesUrl = "http://localhost:3000/api/codefiles";
    const fileRunsUrl = "http://localhost:3000/api/fileruns";

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
