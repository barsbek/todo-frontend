import React from 'react';
import CSSModules from 'react-css-modules';

import ProfilePreview from '../containers/ProfilePreview';
import styles from '../styles/components/Header.css';

const Header = () => (
  <header styleName="container">
    <ProfilePreview />
  </header>
)

export default CSSModules(Header, styles);
