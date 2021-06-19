import React from 'react';
import CheckIcon from './CheckIcon';

import classes from './SelectButton.module.css';

const Selectbutton = (props) => {
    return (
        <button className={classes.button} >
          <span>{props.displayText}</span>
          <CheckIcon className={classes.arrowdown}/>
        </button>
)};

export default Selectbutton