import React, { useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

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
            <Button variant="outlined" color="primary">Edit</Button> // TODO add onClick for buttons as well as routing
            <Button variant="outlined" color="secondary">Delete</Button>
          </Card>
        ))}
      </div>
    </>
  );
};

export default WorkoutClasses;
