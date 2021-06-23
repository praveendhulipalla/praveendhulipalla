import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import LockIcon from "./LockIcon";

const CreateWordpressUser = (props) => {
  return (
    <div>
      <div>
        <div
          style={{
            paddingBottom: "1rem",
            borderBottom: "1px solid rgb(216, 214, 214)",
          }}
        >
          <h5>Create Your WordPress User</h5>

          <div>
            <Form.Row>
              <Form.Group>
                <Form.Label>WP-Admin username</Form.Label>
                <InputGroup>
                  <Form.Control type="text" />
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group style={{ marginRight: "5px" }}>
                <Form.Label>WP-Admin password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="password"
                    style={{ borderRight: "none" }}
                  />
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      style={{ borderLeft: "none", backgroundColor: "white" }}
                    >
                      <LockIcon />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                </InputGroup>
              </Form.Group>

              <Form.Group>
                <Form.Label>Confirm WP-Admin password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="password"
                    style={{ borderRight: "none" }}
                  />
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      style={{ borderLeft: "none", backgroundColor: "white" }}
                    >
                      <LockIcon />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                </InputGroup>
              </Form.Group>
            </Form.Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWordpressUser;
