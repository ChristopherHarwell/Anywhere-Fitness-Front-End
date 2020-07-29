import React, { useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

 //TODO add onClick for buttons as well as routing
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
            </CardContent>
            <Button onClick={props.edit} variant="outlined" color="primary">Edit</Button>
            <Button onClick={props.delete} variant="outlined" color="secondary">Delete</Button>
          </Card>
        ))}
      </div>
    </>
  );
};

export default WorkoutClasses;
