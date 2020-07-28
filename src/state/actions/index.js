import { axiosWithAuth } from "../../utils/axiosWithAuth.js";
import Axios from "axios";

export const GET_WORKOUT_START = "FETCH_START";
export const GET_WORKOUT_SUCCESS = "FETCH_SUCCESS";
export const GET_WORKOUT_FAILURE = "FETCH_FAILURE";

export const getWorkout = () => (dispatch) => {
  dispatch({ type: GET_WORKOUT_START });
    Axios
    .get("http://localhost:8000/api/classes")
    .then((res) => {
      console.log("Res.data: ", res.data);
      dispatch({ type: GET_WORKOUT_SUCCESS, payload: res.data }); // TODO add the rest of the payload after res.data like res.data.results
    })
    .catch((err) => {
      // TODO add action to be taken when error happens
      dispatch({ type: GET_WORKOUT_FAILURE, payload: err.response }); // TODO add the rest of the payload after err.response like err.response.data
    });
};

export const POST_WORKOUT_START = "POST_START";
export const POST_WORKOUT_SUCCESS = "POST_SUCCESS";
export const POST_WORKOUT_FAILURE = "POST_FAILURE";

export const createWorkout = () => (dispatch) => {
  dispatch({ type: POST_WORKOUT_START });
  axiosWithAuth()
    .post("/classes")
    .then((res) => {
      dispatch({type: POST_WORKOUT_SUCCESS, payload: res.data});
    })
    .catch((error) => {
      dispatch({type: POST_WORKOUT_FAILURE, payload: error.response})
    })
};
