import { combineReducers } from "redux";

import putWorkout from "./putWorkout";
import getWorkout from "./getWorkout";
import postWorkout from "./postWorkout";

export default combineReducers({
  putWorkout,
  getWorkout,
  postWorkout
});
