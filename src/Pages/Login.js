import React from "react";
import { Card } from "react-bootstrap";
import LoginForm from "../Components/SignupForm/LoginForm";
import classes from "../Components/SignupForm/SignupForm.module.css";

const Login = (props) => {
  return (
    <Card bsPrefix={classes.signupForm}>
      <Card.Header
        style={{
          textAlign: "center",
          borderBottom: "none",
          backgroundColor: "#ecf1f1",
        }}
      >
        <h2>Hello again!</h2>
      </Card.Header>
      <Card.Body>
        <LoginForm />
      </Card.Body>
    </Card>
  );
};

export default Login;
