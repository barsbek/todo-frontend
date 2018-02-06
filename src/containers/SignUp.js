import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SignUpForm from '../components/SignUpForm';
import { signUp } from '../actions';

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  password_confirmation: ""
}

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.registered) {
      this.setState(INITIAL_STATE);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { error, validations, registered } = this.props;

    if(registered) return <Redirect to={"/"} />
    return (
      <SignUpForm
        fields={this.state}
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
  const { error, registered } = state.newUser;
  if(typeof error === 'string') {
    errorMessage = error;
  } else if(error && typeof error === 'object') {
    validations = error;
  }
  return {
    error: errorMessage,
    validations,
    registered,
  };
}

export default connect(
  mapState,
  { signUp }
)(SignUp)
