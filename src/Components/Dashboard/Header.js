import React, { Fragment } from 'react';

import HeaderButton from './HeaderButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.headercss}>
        <div className={classes.circle}>PD</div>
          <div className={classes.headerdesc}>
            <h1>Hey, Praveen!</h1>
            <p className={classes.borderline}>HOSTING FOCUSED ON YOUR CLIENTS</p>
            
            <p className={classes.colorturquoise}>
                <span>Introducing growth suite, AKA the new (and very improved) version of white </span> 
                <span>label! Read on the learn more </span>
            </p>

          </div>
         
        <HeaderButton onClick={props.onShowCart} />
      </div>
      
    </Fragment>
  );
};

export default Header;