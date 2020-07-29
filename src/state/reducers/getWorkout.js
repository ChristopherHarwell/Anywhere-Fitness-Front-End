import {
  GET_WORKOUT_START,
  GET_WORKOUT_SUCCESS,
  GET_WORKOUT_FAILURE,
} from "../actions";

import { initialState } from "./initialState";


function getWorkout(state = initialState, action) {
  switch (action.type) {
    case GET_WORKOUT_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_WORKOUT_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        classes: action.payload,
      };
    case GET_WORKOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default getWorkout;
