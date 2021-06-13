import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  currentUser: null,
  role: "",
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  const storeLoggedInUser = localStorage.getItem("loggedInUser");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("loggedInUser");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
    loggedinUser: storeLoggedInUser,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  let initialLoggedInUser;
  let initialLoggedInRole;
  if (tokenData) {
    initialToken = tokenData.token;
    initialLoggedInUser = tokenData.loggedinUser;
    initialLoggedInRole = JSON.parse(tokenData.token).payload.scope;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;
  const [loggedInRole, setLoggedInRole] = useState(initialLoggedInRole);
  const [loggedInUser, setLoggedInUser] = useState(initialLoggedInUser);

  const logoutHandler = useCallback(() => {
    setToken(null);
    setLoggedInUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("loggedInUser");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (accessTokentoken, expirationTime, loggedInUser) => {
    setToken(JSON.stringify(accessTokentoken));
    setLoggedInUser(JSON.stringify(loggedInUser));
    setLoggedInRole(JSON.stringify(accessTokentoken.payload.scope));
    localStorage.setItem("token", JSON.stringify(accessTokentoken));
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log("duration" + tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token !== undefined ? JSON.parse(token) : token,
    isLoggedIn: userIsLoggedIn,
    currentUser:
      loggedInUser !== undefined ? JSON.parse(loggedInUser) : loggedInUser,
    role: loggedInRole,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
