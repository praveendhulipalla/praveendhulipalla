import React from "react";

import classes from "./SelectOwnerAndPlan.module.css";
import {
  Form,
  Row,
  Col,
  
} from "react-bootstrap";
import PlanAccordion from "./PlanAccordion";
import NestedPlansList from "./NestedPlansList"

const SelectOwnerPlan = (props) => {
  return (
    <div>
      <div>
        
        <Form.Row>
          <Form.Group>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                // marginBottom: "1rem",
                // marginTop: "1rem",
                marginLeft: "7px",
              }}
            >
              Who will own this site?
            </div>
          </Form.Group>
        </Form.Row>

        <Row>
          <Col>
            <NestedPlansList />
          </Col>
        </Row>
      </div>

      <div>
        <div className={classes.divdata}>
          <div
            style={{
              fontWeight: "bold",
              marginLeft: "7px",
              fontSize: "11px",
              color: "rgb(80, 197, 219)",
            }}
          >
            CANCEL SITE CREATION
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectOwnerPlan;
