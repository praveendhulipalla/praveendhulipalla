import { Redirect } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Layout from './Components/Layout/Layout';
import Dashboard from './Pages/Dashboard';
//nimport 'bootstrap/dist/css/bootstrap.mini.css';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
