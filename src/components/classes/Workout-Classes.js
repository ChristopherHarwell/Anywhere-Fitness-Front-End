import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

import {deleteWorkout} from "../../state/actions/index.js";
import { connect } from "react-redux";

//TODO add the rest of the workout data
const WorkoutClasses = (props) => {
  return (
    <>
      <div>
        {props.classes.map((workout) => (
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Workout: {workout.name}
              </Typography>
              <Typography>Duration: {workout.duration} minutes</Typography>
              <Typography>Type: {workout.type}</Typography>
        <Typography>Start Date: {workout.date}</Typography>
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
  return {
    delete: state.deleteWorkout.classes,
  };
};

connect(mapStateToProps, { deleteWorkout })(WorkoutClasses);

export default WorkoutClasses;
