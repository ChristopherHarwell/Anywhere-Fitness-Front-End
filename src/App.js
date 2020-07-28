import React from "react";
import { connect } from "react-redux";
import { workoutAction } from "./state/actions/index.js";
import Workouts from "./components/workout-form/Workouts.js";
import "./App.css";
import Footer from "./components/footer/footer"
import PrivateRoute from "./utils/PrivateRoute.js";
import Header from "./components/header/header";
import { Route } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { WorkoutClasses } from "./components/classes/Workout-Classes.js";

function App(props) {

  return (
    <div className="App">
      <Header/>
      <br/>
      <br/>
      <br/>
      <br/>
  
      <PrivateRoute exact path="/classes">
        <Workouts workouts={props.storeProps} />
      </PrivateRoute>

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    storeProps: state.workouts,
  };
};

export default connect(mapStateToProps, { workoutAction })(App);
