import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import SignupConfirmation from "./Pages/SignupConfirmation";
import Login from "./Pages/Login";
import PrivateRoute from "./Components/Helpers/PrivateRoute";
import PublicRoute from "./Components/Helpers/PublicRoute";
import "./Components/Amplify/AmplifySettings";
import CreateSitePage from "./Pages/CreateSitePage";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {/* <PublicRoute exact path="/home" restricted={false} component={Home} /> */}
          <PublicRoute
            exact
            path="/login"
            restricted={true}
            component={Login}
          />
          <PublicRoute
            exact
            path="/signup"
            restricted={true}
            component={Signup}
          />
          <PublicRoute
            exact
            restricted={true}
            path="/confirmation"
            component={SignupConfirmation}
          />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/displayCreateSite" component={CreateSitePage} />
          {/*
            * TODO : un comment the below logic to redirect to Dashboard
           <Route path="*"> 
            <Redirect to="/" />
          </Route> */}
        </Switch>
      </Layout>
    </Router>

  );
}

export default App;
