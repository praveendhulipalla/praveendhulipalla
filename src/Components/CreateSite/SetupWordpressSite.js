import React, { Fragment } from 'react';

import classes from './SetupWorrdpressSite.module.css';
import { Form, InputGroup, Card, Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import SelectOwnerPlan from './SelectOwnerPlan';
import AddressIcon from './AddressIcon';
import CreateWordpressUser from './CreateWordpressUser';

const SetupWordpressSite = (props) => {
    return (
      
        <div >
            <div>
                    <div className={classes.stripeddiv}>
                        <div style={{marginTop:"1rem", display:"flex"}}>
                            <div className={classes.circle}>2</div>
                            <div>Setup your WordPress Site</div>
                        </div>
                    </div>

                    <div>
                        <h5>Enter Site Details</h5>

                        <div>
                        <Form.Row>
                            
                    <Form.Group as={Col}>
                        <Form.Label>Site Name</Form.Label>
                        <InputGroup>
                            
                            <Form.Control
                                type="text"
                                placeholder="Search here.."
                                style={{borderRight:"none"}}
                            />
                                
                            
                            <InputGroup.Prepend>
                                <InputGroup.Text style={{borderLeft:"none", backgroundColor:"white"}}>
                                    <AddressIcon />
                                 </InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Temporary domain</Form.Label>
                        <InputGroup>
                        <Form.Control type="email" 
                                      prefix="@flywheelsites.com" 
                                      placeholder="RandomelyGeneratedName"
                                      style={{borderRight:"none"}} />
                        <InputGroup.Prepend>
                                <InputGroup.Text style={{borderLeft:"none", backgroundColor:"white"}}>
                                .flywheelsites.com
                                 </InputGroup.Text>
                            </InputGroup.Prepend>
                            </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group as={Col}>
                    <p style={{paddingBottom:"1rem", borderBottom:"1px solid rgb(216, 214, 214)"}}>If left blank, we will create an awesome (and entirely random) one for you</p>
                    </Form.Group>
                </Form.Row>
                <Form.Row>

                </Form.Row>

                        </div>
                    </div>
                </div>

                <div>
                    <CreateWordpressUser />
                </div>
        </div>
      
    );
  };
  
  export default SetupWordpressSite;