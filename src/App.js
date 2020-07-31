import React from "react";
import { connect } from "react-redux";
import { getWorkout, putWorkout } from "./state/actions/index.js";
import Workouts from "./components/workout-form/Workouts.js";
import "./App.css";
import PrivateRoute from "./utils/PrivateRoute.js";
import Header from "./components/header/header";
import { Route, useHistory} from "react-router-dom";
import { Switch } from "react-router";
import Login from "./components/login/login";
import Register from "./components/register/register";
import WorkoutClasses from "./components/classes/Workout-Classes.js";
import { Button } from "@material-ui/core";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";

function App(props) {
  const { push } = useHistory();

  function fetchWorkout(event) {
    event.preventDefault();
    props.getWorkout();
  }
  function editWorkout(event) {
    push("/edit/classes");
    event.preventDefault();
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
          <Workouts />
        </PrivateRoute>
        <PrivateRoute exact path="/classes">
          <WorkoutClasses edit={editWorkout} classes={props.getClasses}/>
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
          <Home/>
        </Route>
      </Switch>
  
   <Footer/>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("storeProps: ", state.putWorkout.classes);
  return {
    getClasses: state.getWorkout.classes,
  };
};

export default connect(mapStateToProps, { getWorkout, putWorkout })(App);
