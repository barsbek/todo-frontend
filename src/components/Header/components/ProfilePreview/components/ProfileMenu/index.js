import { connect } from 'react-redux';
import ProfileMenuView from './View';

const mapState = state => ({
  email: state.user.data.email,
  menuOpen: state.design.menuOpen,
})

export default connect(mapState)(ProfileMenuView);
