import React, { useState, useEffect } from "react";
import * as yup from "yup";
import loginSchema from "../../validation/loginSchema";
import axios from "axios";
import "./login.styles.scss";
import FormInput from "../form-input/form-input"
import Button from "@material-ui/core/Button";

function Login(props) {
  const [buttonDisabled, setButtonDisabled] = useState(true);

 
  const [formState, setFormState] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

  useEffect(() => {
    loginSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post("auth/login", formState)
      .then(res => {
        window.localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        props.setLoggedState(true);
       
      })
      .catch(err => {
        console.log(err);
      });
  };

  const inputChange = e => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };

    yup
      .reach(loginSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });

    setFormState(newFormData);
  };

  return (
    <div className="sign-up">
    <h1 className="title">Login</h1>
    <br/>
    <form className="login-form" onSubmit={formSubmit}>
   
       
    
          {errors.username.length > 0 ? (
            <p style={{ color: "red" }}>{errors.username}</p>
          ) : null}
          <FormInput
            type="text"
            name="username"
            label="Username"
            value={formState.username}
            inputChange={inputChange}
          />
      
        <br />
        <br />
      
          {errors.password.length > 0 ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={formState.password}
            inputChange={inputChange}
          />
      
        <br />
        <br />
        
    </form>
    <Button onClick={formSubmit} disabled={buttonDisabled}>
          Login
        </Button>
</div>
  );
}

export default Login;
