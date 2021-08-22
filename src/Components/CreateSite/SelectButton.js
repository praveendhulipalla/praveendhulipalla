import React from 'react';
import CheckIcon from './CheckIcon';

import './SelectButton.module.css';


const Selectbutton = (props) => {

    return (
        <button className="buttonenable">
          <span>{props.displayText}</span>
          <CheckIcon/>
        </button>
    )};

export default Selectbutton