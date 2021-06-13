import React, { Fragment } from 'react';

import SelectButton from './SelectButton';
import classes from './CreateSite.module.css';

const CreateSite = (props) => {
    return (
      <Fragment>
        <div style={{backgroundColor:"gray"}}>
            <div style={{marginLeft:"30rem", marginTop:"3rem" }}>
                <h2>Create a New Site</h2>
            </div>
            <div style={{marginLeft:"23rem", marginTop:"3rem" }}>
                <div>
                    <h3> (1) Select owner and plan</h3>
                </div>
                <div className={classes.headercss}>
                    <SelectButton />
                    <SelectButton />
                </div>
            </div>
        </div>
      </Fragment>
    );
  };
  
  export default CreateSite;