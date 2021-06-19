import React, { Fragment, useContext } from "react";
import AuthContext from "../../store/auth-context";
import HeaderButton from "./HeaderButton";
import classes from "./Header.module.css";

const Header = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <div className={classes.headercss}>
        <div className={classes.circle}>
          {authCtx.currentUser.attributes.name.toUpperCase().slice(0, 2)}
        </div>
        <div className={classes.headerdesc}>
          <h1>Hey, {authCtx.currentUser.attributes.name}!</h1>
          <p className={classes.borderline}>HOSTING FOCUSED ON YOUR CLIENTS</p>

          <p className={classes.colorturquoise}>
            <span>
              Introducing growth suite, AKA the new (and very improved) version
              of white{" "}
            </span>
            <span>label! Read on the learn more </span>
          </p>
        </div>

        <HeaderButton onClick={props.onShowCart} />
      </div>
    </Fragment>
  );
};

export default Header;
