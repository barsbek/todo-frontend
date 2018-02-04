import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from '../containers/SignIn';
import Content from './Content';
import PrivateRoute from './PrivateRoute';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/authenticate" component={SignIn} />
    </Switch>
  </Router>
)

export default App;
