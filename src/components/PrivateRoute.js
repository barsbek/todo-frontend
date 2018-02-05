import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route {...rest} render={props => (
    token ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/authenticate',
        state: { from: props.location }
      }} />
    )
  )} />
)

const mapState = state => ({
  token: state.user.token
});

export default connect(mapState)(PrivateRoute);
