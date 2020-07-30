import React, { useState } from "react";
import { TextField, makeStyles, Card, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "40rem",
    marginLeft: "30rem",
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
      marginLeft: "15rem",
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

function Workouts(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-helperText"
            label="Workout"
            defaultValue=""
            helperText="Name of Workout"
            variant="outlined"
          />

          <TextField
            id="outlined-helperText"
            label="Date"
            defaultValue=""
            helperText="Date of Workout"
            variant="outlined"
          />
          <TextField
            id="outlined-helperText"
            label="Time"
            defaultValue=""
            helperText="Time of Workout"
            variant="outlined"
          />
          <TextField
            id="outlined-helperText"
            label="Duration"
            defaultValue=""
            helperText="Length of Workout"
            variant="outlined"
          />

          <TextField
            id="outlined-helperText"
            label="Name"
            defaultValue={props.name}
            helperText="Name of Instructor"
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static"
            label="About"
            multiline
            rows={4}
            defaultValue=""
            helperText="About the workout"
            variant="outlined"
          />

          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={props.saveWorkout}
          >
            Save
          </Button>
        </div>
      </form>
    </Card>
  );
}
// connect({}, {putWorkout})(Workouts);

export default Workouts;
