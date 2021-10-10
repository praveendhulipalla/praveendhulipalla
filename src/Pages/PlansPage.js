import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import AllPlanCards from "../Components/CreatePlan/AllPlanCards";


const PlansPage = (props) => {
  return (
    <Container style={{ width: "60%" }}>
      <Row>
        <Col>
          <AllPlanCards />
        </Col>
      </Row>
    </Container>
  );
};

export default PlansPage;

/* <div>
                    <h3> (1) Select owner and plan</h3>
                </div>
                <div>
                    <span className={classes.ex}>
                        <SelectButton displayText="Me" className={classes.example}/>
                    </span>
                    <span>    
                        <SelectButton displayText="Organization" className={classes.example1}/>
                    </span>
                </div>*/
