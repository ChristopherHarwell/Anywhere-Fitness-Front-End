import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
            <Link to="/edit/classes">
              <Button onClick={props.edit} variant="outlined" color="primary">
                Edit
              </Button>
            </Link>

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
