import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class SignInForm extends Component {

  state = {
    email: "",
    password: ""
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.signIn(email, password)
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Login"
        />
      </form>
    )
  }
}
