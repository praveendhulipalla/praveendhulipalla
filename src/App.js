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
import "./Components/Amplify/AmplifySettings";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/signup" component={Signup} />
          <PublicRoute
            exact
            path="/confirmation"
            component={SignupConfirmation}
          />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
