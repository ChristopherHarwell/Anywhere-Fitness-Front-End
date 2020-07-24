import React from 'react';

import { connect } from "react-redux";
import {workoutAction} from "./state/actions/index.js";
import Workouts from './components/banner/Workouts.js';
import "./App.css";

import Login from "./components/login/login";
import Register from "./components/register/register";
import './App.css';


function App(props) {
  return (
    <div className="App">

      <Workouts workouts={props.storeProps} />

    <Login/>
    <Register/>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    storeProps: state.workouts
}};

export default connect(mapStateToProps, {workoutAction})(App);
