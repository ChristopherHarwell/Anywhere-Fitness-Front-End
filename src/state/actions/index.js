import { axiosWithAuth } from "../../utils/axiosWithAuth.js";

export const FETCH_WORKOUT_START = "FETCH_START";
export const FETCH_WORKOUT_SUCCESS = "FETCH_SUCCESS";
export const FETCH_WORKOUT_FAILURE = "FETCH_FAILURE";

export const workoutAction = () => (dispatch) => {
  dispatch({ type: FETCH_WORKOUT_START });
  axiosWithAuth()
    .get("https://anywhere-fitness-3.herokuapp.com/")
    .then((res) => {
      dispatch({ type: FETCH_WORKOUT_SUCCESS, payload: res.data }); // TODO add the rest of the payload after res.data like res.data.results
    })
    .catch((err) => {
      // TODO add action to be taken when error happens
      dispatch({ type: FETCH_WORKOUT_FAILURE, payload: err.response }); // TODO add the rest of the payload after err.response like err.response.data
    });
};
