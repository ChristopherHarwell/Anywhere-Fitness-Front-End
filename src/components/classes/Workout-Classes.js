import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import searchClass from "../searchClass";
import axios from "axios";

//TODO add the rest of the workout data
const WorkoutClasses = (props) => {
  const [classes, setClasses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://anywhere-fitness-3.herokuapp.com/api/classes")
      .then((res) => {
        console.log(res.data);
        setClasses(res.data);
      });
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const result = classes.filter((cls) => {
    return cls.title.toLowerCase().includes(search);
  });

  
  return (
    <>
      <div>
        <center>
          <searchClass value={search} onChange={handleChange} />
        </center>
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

export default WorkoutClasses;
