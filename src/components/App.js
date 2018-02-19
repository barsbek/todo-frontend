import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import SignOut from './SignOut';
import PrivateRoute from './PrivateRoute';
import Content from './Content'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/authenticate" component={SignIn} />
      <Route exact path="/signout" component={SignOut} />
      <PrivateRoute path="/" component={Content} />
    </Switch>
  </Router>
)

export default App;
