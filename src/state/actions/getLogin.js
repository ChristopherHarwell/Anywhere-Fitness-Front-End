import axios from "axios";

export const FETCH_LOGIN_START = "FETCH_START";
export const FETCH_LOGIN_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOGIN_FAILURE = "FETCH_FAILURE";

export const getLogin = () => dispatch => {
  dispatch({ type: FETCH_LOGIN_START });
  axios
    .get("your API endpoint goes here") // TODO add API endpoint
    .then(res => {
 
      dispatch({ type: FETCH_LOGIN_SUCCESS,  
        payload: res.data }); // TODO add the rest of the payload after res.data like res.data.results
    })
    .catch(err => {
      // TODO add action to be taken when error happens
      dispatch({ type: FETCH_LOGIN_FAILURE,
         payload: err.response }); // TODO add the rest of the payload after err.response like err.response.data
    });
};
