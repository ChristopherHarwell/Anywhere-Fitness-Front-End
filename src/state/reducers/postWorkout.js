import {
  POST_WORKOUT_START,
  POST_WORKOUT_SUCCESS,
  POST_WORKOUT_FAILURE,
} from "../actions";

// import { initialState } from "./initialState";

const initialState = {
  classes: [],
  error: "",
  isFetching: false,
};
function postWorkout(state = initialState, action) {
  switch (action.type) {
    case POST_WORKOUT_START:
      return {
        ...state,
        isFetching: true,
      };
    case POST_WORKOUT_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        classes: action.payload,
      };
    case POST_WORKOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default postWorkout;
