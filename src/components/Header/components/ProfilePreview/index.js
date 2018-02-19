import { connect } from 'react-redux';

import ProfilePreviewView from './View';
import {
  toggleProfileMenu
} from 'redux-app/actions/design';

const TEMP_IMAGE = "https://cdn4.iconfinder.com/data/icons/eldorado-user/40/user-512.png";

const mapState = state => ({
  name: state.user.data.name,
  image: TEMP_IMAGE,
  menuOpen: state.design.menuOpen
})

export default connect(
  mapState,
  { toggleMenu: toggleProfileMenu }
)(ProfilePreviewView);
