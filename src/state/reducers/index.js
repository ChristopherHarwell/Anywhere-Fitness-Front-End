import {
    FETCH_WORKOUT_START, // change this to your action
    FETCH_WORKOUT_SUCCESS, // change this to your action
    FETCH_WORKOUT_FAILURE // change this to your action
  } from "../actions";
  
    const initialState = {
    workouts: [], //TODO make sure initial state is correct
    error: "",
    isFetching: false
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_WORKOUT_START: 
        return {
          ...state,
          isFetching: true
        };
      case FETCH_WORKOUT_SUCCESS:
        return {
          ...state,
          error: "",
          isFetching: false,
          yourInitialState: action.payload // TODO add state property
        };
      case FETCH_WORKOUT_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        };
      default:
        return state;
    }
  }
  
  export default reducer;