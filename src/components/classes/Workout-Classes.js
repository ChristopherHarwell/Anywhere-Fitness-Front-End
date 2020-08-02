
import React, { useEffect } from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { Link, Route, useHistory } from "react-router-dom";
import { deleteWorkout } from "../../state/actions/index";
import { connect } from "react-redux";

//TODO add the rest of the workout data
const WorkoutClasses = (props) => {
  const { push } = useHistory();

  return (
    <>
      <div>
        {props.workouts.map((workout) => (
          <Card key={workout.class_id}>

import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import searchClass from "../searchClass";
import axios from "axios";

//TODO add the rest of the workout data
const WorkoutClasses = (props) => {
  const [classes, setClasses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://anywhere-fitness-3.herokuapp.com/api/classes")
      .then((res) => {
        console.log(res.data);
        setClasses(res.data);
      });
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const result = classes.filter((cls) => {
    return cls.title.toLowerCase().includes(search);
  });

  
  return (
    <>
      <div>
        <center>
          <searchClass value={search} onChange={handleChange} />
        </center>
        {props.classes.map((workout) => (
          <Card>

            <CardContent>
              <Typography variant="h5" gutterBottom>
                Workout: {workout.name}
              </Typography>
              <Typography>Duration: {workout.duration} minutes</Typography>
              <Typography>Type: {workout.type}</Typography>
              <Typography>Start Date: {workout.date}</Typography>

              <Typography>Class ID: {workout.class_id}</Typography>
              <Typography>Start time: {workout.start_time}</Typography>
            </CardContent>
            <Button
              variant="outlined"
              color="primary"
            >
              <Link to={`/edit/classes/${workout.class_id}`}>Edit</Link>
            </Button>
            {/* <Route path={`/edit/classes/${workout.class_id}`}></Route> */}
            <Button
              onClick={() => props.deleteWorkout(workout.class_id)}
              variant="outlined"
              color="secondary"
            >

            </CardContent>

            <Button onClick={props.edit} variant="outlined" color="primary">
              Edit
            </Button>

            <Button onClick={props.delete} variant="outlined" color="secondary">

              Delete
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
};


const mapStateToProps = (state) => {
  console.log("Workout-Classes: ", state.classesReducer);
  return {
    workouts: state.classesReducer.classes,
  };
};
export default connect(mapStateToProps, { deleteWorkout })(WorkoutClasses);

export default WorkoutClasses;

