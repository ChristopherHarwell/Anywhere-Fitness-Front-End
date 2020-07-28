import {
  GET_WORKOUT_START, // change this to your action
  GET_WORKOUT_SUCCESS, // change this to your action
  GET_WORKOUT_FAILURE, // change this to your action
} from "../actions";

const initialState = {
  classes: [],
  error: "",
  isFetching: false,
};

function reducer(state = initialState, action) {
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

export default reducer;
