import React from "react";
import { Card } from "react-bootstrap";
import LoginForm from "../Components/SignupForm/LoginForm";
import classes from "../Components/SignupForm/SignupForm.module.css";

const Login = (props) => {
  return (
    <Card bsPrefix={classes.signupForm}>
      <LoginForm />
    </Card>
  );
};

export default Login;
