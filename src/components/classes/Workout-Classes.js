import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export function WorkoutClasses() {
 axiosWithAuth()
    .get("/classes")
    .then((workout) => {
        console.log(workout.data)
    })
    .catch((err) => console.log(err));
}
