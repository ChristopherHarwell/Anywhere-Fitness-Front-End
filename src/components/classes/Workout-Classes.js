import React from "react";
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
                {workout.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default WorkoutClasses;
