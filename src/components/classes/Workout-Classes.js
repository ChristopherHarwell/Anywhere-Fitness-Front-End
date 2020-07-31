import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { Link, Route } from "react-router-dom";

//TODO add the rest of the workout data
const WorkoutClasses = (props) => {
  return (
    <>
      <div>
        {props.classes.map((workout, id) => (
          <Card key={id}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Workout: {workout.name}
              </Typography>
              <Typography>Duration: {workout.duration} minutes</Typography>
              <Typography>Type: {workout.type}</Typography>
              <Typography>Start Date: {workout.date}</Typography>
        <Typography>Class ID: {workout.class_id}</Typography>
            </CardContent>
            <Button onClick={props.edit} variant="outlined" color="primary">
              <Link to={`/edit/classes/${props.class_id}`}>Edit</Link>
            </Button>
            {/* <Route path={`/edit/classes/${workout.class_id}`}></Route> */}
            <Button onClick={props.delete} variant="outlined" color="secondary">
              Delete
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
};

export default WorkoutClasses;
