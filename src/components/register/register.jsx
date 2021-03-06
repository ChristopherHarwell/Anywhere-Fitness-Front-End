import React, { useState, useEffect } from "react";
import * as yup from "yup";
import registerSchema from "../../validation/registerSchema";
import { postUser } from "../../state/actions/index.js";

import { useHistory } from "react-router-dom";
import "./register.styles.scss";
import FormInput from "../form-input/form-input";
import Button from "@material-ui/core/Button";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { connect } from "react-redux";

function Register(props) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { push } = useHistory();
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    role_id: null,
  });
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    role_id: null,
  });

  useEffect(() => {
    registerSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (e) => {
    e.preventDefault();
    props.postUser([formState]);
    push("/login");
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    yup
      .reach(registerSchema, e.target.name)
      .validate(e.target.value)

      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });

    setFormState(newFormData);
  };

  return (
    <div className="sign-up">
      <h1 className="title">Register</h1>
      <br />
      <form className="sign-up-form">
        {errors.first_name.length > 0 ? (
          <p style={{ color: "red" }}>{errors.first_name}</p>
        ) : null}
        <FormInput
          type="text"
          name="first_name"
          label="First Name"
          value={formState.first_name}
          inputChange={inputChange}
          required
        />

        <br />
        <br />

        {errors.last_name.length > 0 ? (
          <p style={{ color: "red" }}>{errors.last_name}</p>
        ) : null}
        <FormInput
          type="text"
          name="last_name"
          label="Last Name"
          value={formState.last_name}
          inputChange={inputChange}
          required
        />

        <br />
        <br />

        {errors.email.length > 0 ? (
          <p style={{ color: "red" }}>{errors.email}</p>
        ) : null}
        <FormInput
          type="text"
          name="email"
          label="Email"
          value={formState.email}
          onChange={inputChange}
          required
        />

        <br />
        <br />

        {errors.username.length > 0 ? (
          <p style={{ color: "red" }}>{errors.username}</p>
        ) : null}
        <FormInput
          type="text"
          name="username"
          label="Username"
          value={formState.username}
          onChange={inputChange}
          required
        />

        <br />
        <br />

        {errors.password.length > 0 ? (
          <p style={{ color: "red" }}>{errors.username}</p>
        ) : null}
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={formState.password}
          onChange={inputChange}
          required
        />
        <br />
        <br />

        <div className="reg-instructor">
          Are you a Student or Trainer?
          <br />
          <br />
          <select
            name="role_id"
            value={formState.role_id}
            onChange={inputChange}
          >
            <option>--Select One--</option>
            <option value="1">Student</option>
            <option value="2">Trainer</option>
          </select>
        </div>

        <br />
        <br />
      </form>

      <Button onClick={formSubmit} disabled={buttonDisabled}>
        Register
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("Register: ", state.classesReducer)
  return {
    user: state.classesReducer.classes,
  };
};

export default connect(mapStateToProps, { postUser })(Register);
