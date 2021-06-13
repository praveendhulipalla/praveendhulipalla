import { useContext } from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import SignupConfirmation from "./Pages/SignupConfirmation";
import Login from "./Pages/Login";
import PrivateRoute from "./Components/Helpers/PrivateRoute";
import PublicRoute from "./Components/Helpers/PublicRoute";
import AuthContext from "./store/auth-context";
import "./Components/Amplify/AmplifySettings";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Router>
      <Layout>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={Login}
            authCtx={authCtx}
          />
          <PublicRoute
            exact
            path="/signup"
            component={Signup}
            authCtx={authCtx}
          />
          <PublicRoute
            exact
            path="/confirmation"
            component={SignupConfirmation}
            authCtx={authCtx}
          />
          <PrivateRoute
            exact
            path="/"
            component={() => <Dashboard userName="Venkat" />}
            authCtx={authCtx}
            rest="userName=hi"
          />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
