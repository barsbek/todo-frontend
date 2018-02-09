import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route {...rest} render={props => (
    authenticated ? (
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
  authenticated: state.user.data && state.user.data.token
})

export default connect(mapState)(PrivateRoute);
