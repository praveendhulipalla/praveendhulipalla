import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, roles, name, ...rest }) => {
  const authCtx = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        const currentUser = authCtx.currentUser;
        if (!currentUser) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }

        // check if route is restricted by role
        if (roles && roles.indexOf(authCtx.role) === -1) {
          // role not authorised so redirect to home page
          return <Redirect to={{ pathname: "/" }} />;
        }

        // authorised so return component
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
