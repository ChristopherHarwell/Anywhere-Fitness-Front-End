import React, { useState, useEffect } from "react";
import { TextField, makeStyles, Card, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { putWorkout, getWorkout } from "../../state/actions";
import { connect } from "react-redux";

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

// TODO Take return data and save it to form state
// TODO Reference that data to prepopulate form fields
// TODO Perfom a PUT request to send that data to the backend
function Workouts(props) {
  const classes = useStyles();

  const { push } = useHistory();
  function editWorkout(id, newData) {
    putWorkout(id, newData);
    console.log("ID: ", id, "New Data: ", newData);
    push(`/classes`);
  }

  useEffect(() => {
    props.getWorkout();
  }, []);

  const initialState = {
    name: "",
    instructor_id: Number(),
    type_id: "",
    date: "",
    start_time: "",
    duration: Number(),
    intensity: "",
    location: "",
    number_of_attendees: Number(),
    max_class_size: Number(),
  };

  return (
    <Card className={classes.root}>
      <form
        className={classes.form}
        onSubmit={editWorkout}
        noValidate
        autoComplete="off"
      >
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
const mapStateToProps = (state) => {
  console.log("Workouts: ", state.getWorkout);
  return {
    workouts: state.putWorkout.classes,
    getClasses: state.getWorkout.classes,
  };
};
export default connect(mapStateToProps, { putWorkout, getWorkout })(Workouts);
