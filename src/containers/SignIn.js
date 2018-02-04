import { connect } from 'react-redux';

import { signIn } from '../actions';
import SignInForm from '../components/SignInForm';

export default connect(null, {
  signIn
})(SignInForm);
