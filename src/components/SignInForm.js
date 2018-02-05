import React from 'react';
import PropTypes from 'prop-types';

const SignInForm = ({
  onSubmit,
  onChange
}) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      name="email"
      onChange={onChange}
    />
    <input
      type="password"
      name="password"
      onChange={onChange}
    />
    <input
      type="submit"
      value="Login"
    />
  </form>
)

export default SignInForm;
