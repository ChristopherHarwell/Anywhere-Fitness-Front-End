import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> e18496ce006a6a73986b3bc8cc45150e05c95ce2
import { connect } from "react-redux";
import {workoutAction} from "./state/actions/index.js";
import Workouts from './components/banner/Workouts.js';
import "./App.css";
<<<<<<< HEAD
import Login from "./components/login/login";
import Register from "./components/register/register";
import './App.css';
=======

import Login from "./components/login/login";
import Register from "./components/register/register";
import './App.css';

>>>>>>> e18496ce006a6a73986b3bc8cc45150e05c95ce2

function App(props) {
  return (
    <div className="App">
<<<<<<< HEAD
      <Workouts workouts={props.storeProps} />
    <Login/>
    <Register/>
=======

      <Workouts workouts={props.storeProps} />

    <Login/>
    <Register/>

>>>>>>> e18496ce006a6a73986b3bc8cc45150e05c95ce2
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    storeProps: state.workouts
}};

export default connect(mapStateToProps, {workoutAction})(App);
