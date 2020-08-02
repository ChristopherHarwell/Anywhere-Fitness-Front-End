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

const emptyState = {
  name: "",
  instructor_id: 0,
  type_id: "",
  date: "",
  start_time: "",
  duration: 0,
  intensity: "",
  location: "",
  number_of_attendees: 0,
  max_class_size: 0,
};

function Workouts(props) {
  const classes = useStyles();
  const { id } = useParams();
  const [formState, setFormState] = useState(emptyState);

  const { push } = useHistory();

  useEffect(() => {
    props.getWorkout();
  }, []);

  useEffect(() => {
    const currentWorkout = props.workouts.find(
      (workout) => `${workout.class_id}` === id
    );
    setFormState(currentWorkout ?? emptyState);
  }, [props.workouts]);

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const { class_id, type, instructor_username ,...workout} = formState;
    props.putWorkout(id, { id: class_id, ...workout });
    push(`/classes`);
  }

  return (
    <Card className={classes.root}>
      <form
        className={classes.form}
        onSubmit={handleSubmit}
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
            name="name"
            value={formState.name}
            onChange={handleChange}
          />

          <TextField
            id="outlined-helperText"
            label="Date"
            defaultValue=""
            helperText="Date of Workout"
            variant="outlined"
            name="date"
            value={formState.date}
            onChange={handleChange}
          />
          <TextField
            id="outlined-helperText"
            label="Time"
            defaultValue=""
            helperText="Time of Workout"
            variant="outlined"
            name="start_time"
            value={formState.start_time}
            onChange={handleChange}
          />
          <TextField
            id="outlined-helperText"
            label="Duration"
            defaultValue=""
            helperText="Length of Workout"
            variant="outlined"
            name="duration"
            value={formState.duration}
            onChange={handleChange}
          />

          <TextField
            id="outlined-helperText"
            label="Name"
            defaultValue={props.name}
            helperText="Name of Instructor"
            variant="outlined"
            name="name"
            value={formState.instructor_username}
            onChange={handleChange}
          />

          <Button
          type="submit"
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </div>
      </form>
    </Card>
  );
}
const mapStateToProps = (state) => {
  console.log("Workouts: ", state.classesReducer);
  return {
    workouts: state.classesReducer.classes,
  };
};
export default connect(mapStateToProps, { putWorkout, getWorkout })(Workouts);
