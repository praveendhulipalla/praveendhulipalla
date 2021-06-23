// import React from "react";
import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const authCtx = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        const currentUser = authCtx.currentUser;
        if (currentUser && restricted) {
          // not logged in so redirect to home page with the return url
          return (
            <Redirect
              to={{ pathname: "/dasboard", state: { from: props.location } }}
            />
          );
        }

        // authorised so return component
        return <Component {...props} />;
      }}
    />
  );
};

export default PublicRoute;
