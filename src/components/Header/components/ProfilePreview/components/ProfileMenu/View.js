import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

const ProfileMenuView = ({
  email,
  menuOpen
}) => (
  <div styleName="profile-menu" className={!menuOpen && "hidden"}>
    <div styleName="name">{email}</div>
    <Link to="/signout">
      Sign out
    </Link>
  </div>
)

ProfileMenuView.propTypes = {
  email: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool.isRequired,
}

export default CSSModules(ProfileMenuView, styles);
