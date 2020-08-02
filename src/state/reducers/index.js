import { initialState } from "./initialState";
import {
  DELETE_WORKOUT_START,
  DELETE_WORKOUT_SUCCESS,
  DELETE_WORKOUT_FAILURE,
  GET_WORKOUT_START,
  GET_WORKOUT_SUCCESS,
  GET_WORKOUT_FAILURE,
  POST_USER_START,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
  PUT_WORKOUT_START,
  PUT_WORKOUT_SUCCESS,
  PUT_WORKOUT_FAILURE,
} from "../actions";

export function classesReducer(state = initialState, action) {
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

    case POST_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        classes: action.payload,
      };
    case POST_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

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
