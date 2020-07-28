import React, { useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Card, CardContent, Typography } from "@material-ui/core";

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
              <Typography>
                  Duration: {workout.duration} minutes
              </Typography>
              <Typography>
                  Type: {workout.type}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default WorkoutClasses;
