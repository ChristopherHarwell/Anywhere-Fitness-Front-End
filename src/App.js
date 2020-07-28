import React from "react";
import { connect } from "react-redux";
import { getWorkout } from "./state/actions/index.js";
import Workouts from "./components/workout-form/Workouts.js";
import "./App.css";
import Footer from "./components/footer/footer";
import PrivateRoute from "./utils/PrivateRoute.js";
import Header from "./components/header/header";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import Login from "./components/login/login";
import Register from "./components/register/register";
import WorkoutClasses from "./components/classes/Workout-Classes.js";
import { Button } from "@material-ui/core";

function App(props) {
  function fetchWorkout(event) {
    event.preventDefault();
    props.getWorkout();
  }

  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <br />
      <br />

      <Switch>
        <PrivateRoute exact path="/classes">
          <WorkoutClasses classes={props.classes} />
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
        <Route path="/">
        </Route>
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
  console.log("storeProps: ", state.classes);
  return {
    classes: state.classes,
  };
};

export default connect(mapStateToProps, { getWorkout })(App);
