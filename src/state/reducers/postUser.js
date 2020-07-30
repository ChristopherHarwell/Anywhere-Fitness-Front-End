import {
  POST_USER_START,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
} from "../actions";

import { initialState } from "./initialState";

function postUser(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}

export default postUser;
