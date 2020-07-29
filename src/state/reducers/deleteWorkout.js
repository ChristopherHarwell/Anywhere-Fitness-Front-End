import {
    DELETE_WORKOUT_START,
    DELETE_WORKOUT_SUCCESS,
    DELETE_WORKOUT_FAILURE,
  } from "../actions";
  
  import { initialState } from "./initialState";
  
  function deleteWorkout(state = initialState, action) {
    switch (action.type) {
      case DELETE_WORKOUT_START:
        return {
          ...state,
          isFetching: true,
        };
      case DELETE_WORKOUT_SUCCESS:
        return {
          ...state,
          error: "",
          isFetching: false,
          classes: action.payload,
        };
      case DELETE_WORKOUT_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false,
        };
      default:
        return state;
    }
  }
  
  export default deleteWorkout;
  