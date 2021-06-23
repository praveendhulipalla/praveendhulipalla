import { React, useState, useRef, useContext } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { Toast } from "../../utils/notifications";
import { Auth } from "aws-amplify";
import classes from "./SignupForm.module.css";

const LoginForm = (props) => {
  const [loading, setLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setLoading(true);

    try {
      let signInResponse = await Auth.signIn(enteredEmail, enteredPassword);
      let userSession = signInResponse.signInUserSession;
      console.log(signInResponse);
      const expirationTime = new Date(
        new Date().getTime() + userSession.accessToken.payload.exp
      );

      console.log(new Date() + " \t " + expirationTime);
      authCtx.login(
        userSession.accessToken,
        expirationTime.toISOString(),
        signInResponse
      );
      history.replace("/dashboard");
      Toast("Success!!", "Login Successfully", "success");
    } catch (error) {
      setLoading(false);
      Toast("Error!!", error.message, "danger");
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="like email@domail.com"
          required={true}
          ref={emailInputRef}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formGridName">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          required={true}
          ref={passwordInputRef}
        />
      </Form.Group>
      <hr className="hr" style={{ marginTop: "10%", marginBottom: "5%" }} />
      <div className={classes.formFooter}>
        <div>
          {!loading && (
            <Link to="#" className="border-right px-1 small">
              FORGET YOUR PASSWORD?
            </Link>
          )}
          {!loading && (
            <Link to="#" className="px-3 small">
              HELP
            </Link>
          )}
        </div>
        <div className={classes.formFooterbtn}>
          <Button type="submit" variant="success" disabled={loading}>
            {loading && (
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
            {loading ? "Loading..." : "SIGN IN"}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
