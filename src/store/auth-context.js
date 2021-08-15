import React, { useState, useEffect, useCallback } from "react";
import { Auth } from "aws-amplify";

let logoutTimer;
let refreshTimer;

const cognitoLogout = async () => {
  return await Auth.signOut();
};

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
  let storedToken = localStorage.getItem("token");
  let storedExpirationDate = localStorage.getItem("expirationTime");
  let storeLoggedInUser = localStorage.getItem("loggedInUser");

  let remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= -30000) {
    if (storedToken !== null && storedToken !== "") {
      cognitoLogout();
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
      localStorage.removeItem("loggedInUser");
    }
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
    loggedinUser: storeLoggedInUser,
  };
};

export const AuthContextProvider = (props) => {
  let tokenData = retrieveStoredToken();
  let initialToken;
  let initialLoggedInUser;
  let initialLoggedInRole;
  if (tokenData) {
    initialToken = tokenData.token;
    initialLoggedInUser = tokenData.loggedinUser;
    initialLoggedInRole = JSON.parse(tokenData.token).payload.scope;
  }

  let [token, setToken] = useState(initialToken);

  let userIsLoggedIn = !!token;
  let [loggedInRole, setLoggedInRole] = useState(initialLoggedInRole);
  let [loggedInUser, setLoggedInUser] = useState(initialLoggedInUser);

  const logoutHandler = useCallback(() => {
    cognitoLogout();
    setToken(null);
    setLoggedInUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("loggedInUser");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const checkForReFreshToken = useCallback(async () => {
    try {
      let data = await Auth.currentAuthenticatedUser();
      console.log("checkForReFreshToken :: " + data);
      if (data != null) {
        const expirationTime = new Date(
          data.signInUserSession.accessToken.payload.exp * 1000
        );

        localStorage.setItem(
          "token",
          JSON.stringify(data.signInUserSession.accessToken)
        );
        localStorage.setItem("expirationTime", expirationTime.toISOString());
        localStorage.setItem("loggedInUser", JSON.stringify(data));

        const remainingTime = calculateRemainingTime(
          expirationTime.toISOString()
        );
        clearTimeout(refreshTimer);
        refreshTimer = setTimeout(checkForReFreshToken, remainingTime);
        clearTimeout(logoutTimer);
        let logoutTimerCal = remainingTime + 30000;
        logoutTimer = setTimeout(logoutHandler, logoutTimerCal);
      }
    } catch (e) {
      console.log("checkForReFreshToken Exception: " + e);
    }
  }, [logoutHandler]);

  const loginHandler = (accessTokentoken, expirationTime, loggedInUser) => {
    setToken(JSON.stringify(accessTokentoken));
    setLoggedInUser(JSON.stringify(loggedInUser));
    setLoggedInRole(JSON.stringify(accessTokentoken.payload.scope));
    localStorage.setItem("token", JSON.stringify(accessTokentoken));
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    const remainingTime = calculateRemainingTime(expirationTime);

    refreshTimer = setTimeout(checkForReFreshToken, remainingTime);
    let logoutTimerCal = remainingTime + 30000;
    logoutTimer = setTimeout(logoutHandler, logoutTimerCal);
  };

  useEffect(() => {
    if (tokenData) {
      let logoutTimerCal = tokenData.duration + 30000;

      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
      if (refreshTimer) {
        clearTimeout(refreshTimer);
      }
      refreshTimer = setTimeout(checkForReFreshToken, tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, logoutTimerCal);
    }
  }, [tokenData, logoutHandler, checkForReFreshToken]);

  let contextValue = {
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
