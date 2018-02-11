import React from 'react';

import ProfilePreview from '../containers/ProfilePreview';
import ProfileMenu from '../containers/ProfileMenu'

const Header = () => (
  <header>
    <ProfilePreview />
    <ProfileMenu />
  </header>
)

export default Header;
