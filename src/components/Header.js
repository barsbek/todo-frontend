import React from 'react';
import PropTypes from 'prop-types';

import ProfilePreview from '../containers/ProfilePreview';
import ProfileMenu from '../containers/ProfileMenu'

const Header = () => (
  <header>
    <ProfilePreview />
    <ProfileMenu />
  </header>
)

export default Header;
