import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signIn } from 'redux-app/actions';
import SignInView from './View';

class SignIn extends Component {

  state = {
    email: "",
    password: ""
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state)
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { from } = this.props.location.state || { from: '/' };
    if(this.props.authenticated) {
      return <Redirect to={from} />
    }

    return (
      <SignInView
        {...this.state}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    )
  }
}

const mapState = state => ({
  authenticated: !!state.user.data
})

export default connect(
  mapState,
  { signIn }
)(SignIn);
