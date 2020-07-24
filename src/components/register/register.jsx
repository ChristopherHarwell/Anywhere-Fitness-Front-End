import React, { useState, useEffect } from "react";
import * as yup from "yup";
import registerSchema from "../../validation/registerSchema";
import axios from "axios";
import { useHistory } from "react-router-dom";
import './register.styles.scss';
import FormInput from "../form-input/form-input";

export default function Register() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { push } = useHistory();
  const [formState, setFormState] = useState({
   first_name: "",
   last_name: "",
   email: "",
   username: "", 
   password: "",
   role_id: false
  });
  const [errors, setErrors] = useState({
    first_name: "",
   last_name: "",
   email: "",
   username: "", 
   password: "",
   role_id: false
  });

  useEffect(() => {
    registerSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = e => {
    e.preventDefault();

    axios
      .post("/register", formState)
      .then(res => {
        console.log(res.data);
        push("/login");
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
      .reach(registerSchema, e.target.name)
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
    <form className="sign-up-form">
        <h1 className="title">Register</h1>
        <br />
        <label>
     
          {errors.first_name.length > 0 ? (
            <p style={{ color: "red" }}>{errors.first_name}</p>
          ) : null}
          <FormInput
            type="text"
            name="first_name"
            label="First Name"
            value={formState.first_name}
            onChange={inputChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          {errors.last_name.length > 0 ? (
            <p style={{ color: "red" }}>{errors.last_name}</p>
          ) : null}
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formState.last_name}
            onChange={inputChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          {errors.email.length > 0 ? (
            <p style={{ color: "red" }}>{errors.email}</p>
          ) : null}
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={inputChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          {errors.username.length > 0 ? (
            <p style={{ color: "red" }}>{errors.username}</p>
          ) : null}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formState.username}
            onChange={inputChange}
            required
          />
        </label>

        <br />
        <br />
        <label>
          {errors.password.length > 0 ? (
            <p style={{ color: "red" }}>{errors.username}</p>
          ) : null}
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={formState.password}
            onChange={inputChange}
            required
          />
        </label>
      
        <br />
        <br />
        Are you an instructor? 
        <br />
        <br />
        <label>
            Yes!
          {errors.role_id.length > 0 ? (
            <p style={{ color: "red" }}>{errors.role_id}</p>
          ) : null}
          <input
            type="checkbox"
            name="role_id"
            value={formState.role_id}
            onChange={inputChange}
          />
          
        </label>
        <br />
        <br />
        <button onClick={formSubmit} disabled={buttonDisabled}>
          Submit
        </button>
    

    
    
    
    
    </form>
    </div>
  );
}
