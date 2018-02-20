import { connect } from 'react-redux';

import Notifications from './Notifications';
import { dismissError } from 'redux-app/actions/errors';

const mapState = (state) => ({
  notifications: state.errors
})

export default connect(
  mapState,
  { onDismiss: dismissError },
)(Notifications);
