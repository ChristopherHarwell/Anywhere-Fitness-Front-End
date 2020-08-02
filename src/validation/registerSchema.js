import * as yup from "yup";

const registerSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(2, "first name must be at least 2 characters long")
    .required("Required"),
  last_name: yup
    .string()
    .min(4, "last name must be at least 4 characters long")
    .required("Required"),
  email: yup
    .string()
    .required("Required"),
  username: yup
    .string()
    .required("Required")
    .min(4, "username must be at least 4 characters long"),
  password: yup
    .string()
    .required("Required")
    .min(2, "password must be at least 4 characters long"),
  role_id: yup
    .boolean()  
});

export default registerSchema;
