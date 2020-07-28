import {
  GET_WORKOUT_START, // change this to your action
  GET_WORKOUT_SUCCESS, // change this to your action
  GET_WORKOUT_FAILURE, // change this to your action
} from "../actions";

const initialState = {
  classes: [{
      class_id: "",
      name: "",
      instructor_id: "",
      instructor_username: "",
      type: "",
      date: "",
      start_time: "",
      duration: "",
      intensity: "",
      location: "",
      number_of_attendees: "",
      max_class_size: "",
  }],
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
        initialState: action.payload,
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
