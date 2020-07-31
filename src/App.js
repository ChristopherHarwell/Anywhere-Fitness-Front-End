import React from "react";
import { connect } from "react-redux";
import {
  getWorkout,
  putWorkout,
  deleteWorkout,
} from "./state/actions/index.js";
import Workouts from "./components/workout-form/Workouts.js";
import "./App.css";
import PrivateRoute from "./utils/PrivateRoute.js";
import Header from "./components/header/header";
import { Route, useHistory } from "react-router-dom";
import { Switch } from "react-router";
import Login from "./components/login/login";
import Register from "./components/register/register";
import WorkoutClasses from "./components/classes/Workout-Classes.js";
import { Button } from "@material-ui/core";
import Footer from "./components/footer/footer";
function App(props) {
  function fetchWorkout(event) {
    event.preventDefault();
    props.getWorkout();
  }
  function editWorkout(event) {
    event.preventDefault();
  }
  function deleteWorkout(event) {
    event.preventDefault();
    props.deleteWorkout();
  }

  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <br />
      <br />

      <Switch>
        <PrivateRoute exact path="/edit/classes">
          <Workouts
            saveWorkout={props.putClasses}
            delete={props.deleteClasses}
          />
        </PrivateRoute>
        <PrivateRoute exact path="/classes">
          <WorkoutClasses
            edit={editWorkout}
            classes={props.getClasses}
            delete={deleteWorkout}
          />
          <Button variant="outlined" onClick={fetchWorkout}>
            Get Workouts
          </Button>
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/"></Route>
      </Switch>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("storeProps: ", state.deleteWorkout.classes);
  return {
    getClasses: state.getWorkout.classes,
    putClasses: state.putWorkout.classes,
    delete: state.deleteWorkout.classes,
  };
};

export default connect(mapStateToProps, {
  getWorkout,
  putWorkout,
  deleteWorkout,
})(App);
