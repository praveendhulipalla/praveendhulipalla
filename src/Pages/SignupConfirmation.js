import React from "react";
import { Card } from "react-bootstrap";
import SignupConfirmationForm from "../Components/SignupForm/SignupConfirmationForm";
import classes from "../Components/SignupForm/SignupForm.module.css";

const Signup = (props) => {
  return (
    <Card bsPrefix={classes.signupForm}>
      <SignupConfirmationForm />
    </Card>
  );
};

export default Signup;
