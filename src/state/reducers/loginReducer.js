import {
    FETCH_LOGIN_START, // change this to your action
    FETCH_LOGIN_SUCCESS, // change this to your action
    FETCH_LOGIN_FAILURE // change this to your action
  } from "../actions";
  
    const initialState = {
        user: {
            first_name: "",
            last_name: "",
            email: "",
            username: "",
            password: "",
            role_id: ""
        }, //TODO make sure initial state is correct
    error: "",
    isFetching: false
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_LOGIN_START: 
        return {
          ...state,
          isFetching: true
        };
      case FETCH_LOGIN_SUCCESS:
        return {
          ...state,
          error: "",
          isFetching: false,
          yourInitialState: action.payload // TODO add state property
        };
      case FETCH_LOGIN_FAILURE:
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