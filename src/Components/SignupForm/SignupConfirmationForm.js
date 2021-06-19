import { React, useRef, useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Toast } from "../../utils/notifications";
import { Auth } from "aws-amplify";

const SignupConfirmationForm = (props) => {
  const [loading, setLoading] = useState(false);
  const emailInputRef = useRef();
  const verificationCodeInputRef = useRef();
  const history = useHistory();

  const handleSignUpConfimation = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await Auth.confirmSignUp(
        emailInputRef.current.value,
        verificationCodeInputRef.current.value
      );
      Toast("Success!!", "Verified Successfully", "success");
      history.push("/login");
    } catch (error) {
      Toast("Error!!", error.message, "danger");
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={handleSignUpConfimation}>
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
        <Form.Label>Verification code</Form.Label>
        <Form.Control
          placeholder="Enter verification code"
          required={true}
          ref={verificationCodeInputRef}
        />
      </Form.Group>
      <Button type="submit" variant="primary" disabled={loading}>
        {loading && (
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
        {loading ? "Loading..." : "Verify your account"}
      </Button>
      {!loading && <Link to="/Signup">make an account &rarr;</Link>}
    </Form>
  );
};

export default SignupConfirmationForm;
