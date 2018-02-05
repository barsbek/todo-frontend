import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUpForm from '../components/SignUpForm';
import { signUp } from '../actions';

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state)
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { error, validations } = this.props;
    return (
      <SignUpForm
        error={error}
        validations={validations}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    )
  }
}

const mapState = state => {
  let errorMessage = '';
  let validations = {};
  const { error } = state.newUser;
  if(typeof error === 'string') {
    errorMessage = error;
  } else if(error && typeof error === 'object') {
    validations = error;
  }
  return { error: errorMessage, validations };
}

export default connect(
  mapState,
  { signUp }
)(SignUp)
