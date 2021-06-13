import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { AuthContextProvider } from "./store/auth-context";
import "./bootstrap.min.css";

ReactDOM.render(
  // <React.StrictMode>
  <AuthContextProvider>
    <ReactNotification />
    <App />
  </AuthContextProvider>,
  // </React.StrictMode>
  document.getElementById("root")
);
