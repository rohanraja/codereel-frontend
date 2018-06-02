import * as types from 'store/types'
let axios = require('axios');

const API_URL = "http://localhost:3000/api/"

export function fetchCodeWalkData() {
  return function (dispatch, getState) {

    loadDataForStateKey(dispatch, "codefiles", types.CODEFILES_RECIEVED);
    loadDataForStateKey(dispatch, "fileruns", types.FILERUNS_RECIEVED);
    loadDataForStateKey(dispatch, "codeStory", types.CODESTORY_RECIEVED);

  };
}

function loadDataForStateKey(dispatch, keyName, actionType)
{
    const Url = API_URL + keyName;

    axios.get(Url).then(
        (response) => {
            dispatch({
              type: actionType,
              payload: response.data
            });
        },
        (err) => {
            console.log(err);
        }
    );
}


// -- new_actionCreator_hook --
