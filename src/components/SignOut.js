import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signOut } from '../redux-app/actions';

class SignOut extends Component {
  componentWillMount() {
    this.props.dispatch(signOut());
  }

  render = () => (
    <Redirect to="/authenticate" />
  )
}

export default connect()(SignOut)
