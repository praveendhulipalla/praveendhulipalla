import React from "react";
import { Card } from "react-bootstrap";
import SignupForm from "../Components/SignupForm/SignupForm";
import classes from "../Components/SignupForm/SignupForm.module.css";

const Signup = (props) => {
  return (
    <Card bsPrefix={classes.signupForm}>
      <Card.Header
        style={{
          textAlign: "center",
          borderBottom: "none",
          backgroundColor: "#ecf1f1",
        }}
      >
        <h2>Create your new account</h2>
        <small className="text-muted form-text">
          <i>
            Create your new account to spin up sites, move sites to Flywheel, or
            to try us free for 14 days!
          </i>
        </small>
      </Card.Header>
      <SignupForm />
    </Card>
  );
};

export default Signup;
