import {
  PUT_WORKOUT_START,
  PUT_WORKOUT_SUCCESS,
  PUT_WORKOUT_FAILURE,
} from "../actions";

// import { initialState } from "./initialState";

const initialState = {
  classes: [],
  error: "",
  isFetching: false,
};
function putWorkout(state = initialState, action) {
  switch (action.type) {
    case PUT_WORKOUT_START:
      return {
        ...state,
        isFetching: true,
      };
    case PUT_WORKOUT_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        classes: action.payload,
      };
    case PUT_WORKOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default putWorkout;
