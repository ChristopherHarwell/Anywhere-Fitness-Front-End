import { combineReducers } from "redux";

import {postUser, putWorkout, getWorkout, deleteWorkout} from "./index";

export default combineReducers({
  putWorkout,
  getWorkout,
  postUser,
  deleteWorkout
});
