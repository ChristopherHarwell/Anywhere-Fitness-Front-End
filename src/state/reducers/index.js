import { combineReducers } from "redux";

import putWorkout from "./putWorkout";
import getWorkout from "./getWorkout";
import postUser from "./postUser";

export default combineReducers({
  putWorkout,
  getWorkout,
  postUser
});
