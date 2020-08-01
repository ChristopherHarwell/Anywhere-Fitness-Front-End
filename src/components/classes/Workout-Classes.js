import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { putWorkout, deleteWorkout } from "../../state/actions/index";

//TODO add the rest of the workout data
const WorkoutClasses = ({ classes, putWorkout }) => {
  function deleteExercise(id) {
    deleteWorkout(id);
  }

  return (
    <>
      <div>
        {classes.map((workout) => (
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Workout: {workout.name}
              </Typography>
              <Typography>Duration: {workout.duration} minutes</Typography>
              <Typography>Type: {workout.type}</Typography>
              <Typography>Start Date: {workout.date}</Typography>
              <Typography>Class ID: {workout.class_id}</Typography>
            </CardContent>
            <Button onClick={workout.edit} variant="outlined" color="primary">
              <Link to={`/edit/classes/${workout.class_id}`}>Edit</Link>
            </Button>
            {/* <Route path={`/edit/classes/${workout.class_id}`}></Route> */}
            <Button onClick={deleteExercise} variant="outlined" color="secondary">
              Delete
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    workouts: state.putWorkout,
  };
};

export default connect(mapStateToProps, { putWorkout })(WorkoutClasses);
