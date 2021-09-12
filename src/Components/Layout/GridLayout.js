import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import SiteCreater from "../SiteCreater/SiteCreater";

const GridLayout = (props) => {
  return (
    <Container style={{ width: "60%" }}>
      <Row>
        <Col>
          <SiteCreater />
        </Col>
      </Row>
    </Container>
  );
};

export default GridLayout;

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
