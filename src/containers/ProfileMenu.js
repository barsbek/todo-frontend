import { connect } from 'react-redux';
import ProfileMenuView from '../components/ProfileMenuView';

const mapState = state => ({
  email: state.user.data.email,
  menuOpen: state.design.menuOpen,
})

export default connect(mapState)(ProfileMenuView);
