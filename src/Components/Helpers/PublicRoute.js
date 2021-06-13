import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, authCtx, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = authCtx.currentUser;
      if (currentUser) {
        // not logged in so redirect to home page with the return url
        return (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

export default PublicRoute;
