import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileMenuView = ({
  email,
  menuOpen
}) => (
  <div style={{ display: menuOpen ? 'block' : 'none' }}>
    <div>{email}</div>
    <Link to="/signout">
      Sign out
    </Link>
  </div>
)

ProfileMenuView.propTypes = {
  email: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool.isRequired,
}

export default ProfileMenuView;
