import { axiosWithAuth } from "../../utils/axiosWithAuth.js";
import Axios from "axios";

export const GET_WORKOUT_START = "FETCH_START";
export const GET_WORKOUT_SUCCESS = "FETCH_SUCCESS";
export const GET_WORKOUT_FAILURE = "FETCH_FAILURE";

export const POST_USER_START = "POST_START";
export const POST_USER_SUCCESS = "POST_SUCCESS";
export const POST_USER_FAILURE = "POST_FAILURE";

export const PUT_WORKOUT_START = "PUT_START";
export const PUT_WORKOUT_SUCCESS = "PUT_SUCCESS";
export const PUT_WORKOUT_FAILURE = "PUT_FAILURE";

export const DELETE_WORKOUT_START = "DELETE_START";
export const DELETE_WORKOUT_SUCCESS = "DELETE_SUCCESS";
export const DELETE_WORKOUT_FAILURE = "DELETE_FAILURE";

export const getWorkout = () => (dispatch) => {
  dispatch({ type: GET_WORKOUT_START });
  Axios.get("https://anywhere-fitness-3.herokuapp.com/api/classes")
    .then((res) => {
      console.log("Res.data: ", res.data);
      dispatch({ type: GET_WORKOUT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_WORKOUT_FAILURE, payload: err.response });
    });
};

export const postUser = () => (dispatch) => {
  dispatch({ type: POST_USER_START });
  axiosWithAuth()
    .post("/classes")
    .then((res) => {
      dispatch({ type: POST_USER_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: POST_USER_FAILURE, payload: error.response });
    });
};

//TODO fix this putWorkout function so it will allow you to edit data
export const putWorkout = (id, newData) => (dispatch) => {
  dispatch({ type: PUT_WORKOUT_START });
  axiosWithAuth()
    .put(`/classes/${id}`, newData)
    .then((res) => {
      axiosWithAuth()
        .get(`/classes/${id}`)
        .then((res) =>
          dispatch({
            type: PUT_WORKOUT_SUCCESS,
            payload: res.data,
          }),
        )
    })
    .catch((error) => {
      dispatch({ type: PUT_WORKOUT_FAILURE, payload: error.response });
    });
};

//TODO fix this deleteWorkout function so it will allow you to delete data
export const deleteWorkout = (id) => (dispatch) => {
  dispatch({ type: DELETE_WORKOUT_START });
  axiosWithAuth()
    .delete(`/classes/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_WORKOUT_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: DELETE_WORKOUT_FAILURE, payload: error.response });
    });
};
