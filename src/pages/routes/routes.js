import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../../components/navbar/nav';
import Home from '../home/home';
import PrivateRoute from './privateRoutes';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default Routes;
