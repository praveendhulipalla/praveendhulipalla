import React from "react";
import { Card } from "react-bootstrap";
import SignupForm from "../Components/SignupForm/SignupForm";
import classes from "../Components/SignupForm/SignupForm.module.css";

const Signup = (props) => {
  return (
    <Card bsPrefix={classes.signupForm}>
      <SignupForm />
    </Card>
  );
};

export default Signup;
