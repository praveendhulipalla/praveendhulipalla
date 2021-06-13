import React from 'react';
import CheckIcon from './CheckIcon';

import classes from './SelectButton.module.css';

const Selectbutton = (props) => {
    return (
        <button className={classes.button} >
          <span>Me</span>
          <span >
              <CheckIcon />
          </span>
        </button>
)};

export default Selectbutton