import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from '../containers/SignIn';
import PrivateRoute from './PrivateRoute';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/authenticate" component={SignIn} />
    </Switch>
  </Router>
)

export default App;
