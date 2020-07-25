import React from "react";
import { connect } from "react-redux";
import { workoutAction } from "./state/actions/index.js";
import Workouts from "./components/banner/Workouts.js";
import "./App.css";

import Login from "./components/login/login";
import Register from "./components/register/register";
import "./App.css";
import PrivateRoute from "./utils/PrivateRoute.js";
import { Link, Route } from "react-router-dom";
import { Button } from "@material-ui/core";

function App(props) {
  return (
    <div className="App">
      <Button variant="outlined" color="primary">
        <Link to="/login">Login</Link>
      </Button>

      <Button variant="outlined" color="primary">
        <Link to="/Register">Register</Link>
      </Button>

      <PrivateRoute exact path="/workouts">
        {"//TODO add path based on API url"}
        <Workouts workouts={props.storeProps} />
      </PrivateRoute>

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    storeProps: state.workouts,
  };
};

export default connect(mapStateToProps, { workoutAction })(App);
