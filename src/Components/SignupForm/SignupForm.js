import { React, useState, useRef } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Toast } from "../../utils/notifications";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import classes from "./SignupForm.module.css";

const SignupForm = (props) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const nameInputRef = useRef();
  const phoneNumInputRef = useRef();
  const companyNameInputRef = useRef();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const confirmEnteredPassword = confirmPasswordInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredPhoneNum = phoneNumInputRef.current.value;
    const enteredCompanyName = companyNameInputRef.current.value;

    if (enteredPassword !== confirmEnteredPassword) {
      Toast(
        "Error!!",
        "Password and Confirm Password should be same",
        "danger"
      );
      setLoading(false);
      return;
    }

    try {
      await Auth.signUp({
        username: enteredEmail,
        password: confirmEnteredPassword,
        attributes: {
          email: enteredEmail,
          name: enteredName,
          phone_number: enteredPhoneNum,
          "custom:company": enteredCompanyName,
        },
      });
      Toast("Success!!", "Signup was successful", "success");
      history.push("/confirmation");
    } catch (error) {
      console.error(error);
      Toast("Error!!", error.message, "danger");
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={handleSignUp}>
      <Form.Group controlId="formGridName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="Enter name"
          required={true}
          ref={nameInputRef}
        />
      </Form.Group>
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
      <Form.Group controlId="formBasicPhone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="phone"
          placeholder="Enter phone number"
          pattern="\d+"
          ref={phoneNumInputRef}
        />
        <Form.Text className="text-muted">
          We'll never share your phone number with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formGridCompanyName">
        <Form.Label>Company name</Form.Label>
        <Form.Control
          placeholder="Enter company Name"
          ref={companyNameInputRef}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          required={true}
          ref={passwordInputRef}
        />
        <Form.Text className="text-muted">
          Please enter atleast one Capital letter, one special character and one
          number
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicCnfPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter confirm password"
          required={true}
          ref={confirmPasswordInputRef}
        />
      </Form.Group>
      <hr className="hr" style={{ marginTop: "10%", marginBottom: "5%" }} />
      <div className={classes.formFooter}>
        <div>
          <input type="checkbox" name="agreement" required />
          <label for="agreement" className="px-2 small">
            I agree to
            <Link to="#" className="px-1 small">
              Flywheel's terms of services
            </Link>
          </label>
        </div>
        <div>
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
            {loading ? "Loading..." : "NEXT"}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default SignupForm;
