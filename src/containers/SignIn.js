import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { signIn } from '../actions';
import SignInForm from '../components/SignInForm';

export default connect(null, {
  signIn
})(SignInForm);
