import React from 'react';
import CSSModules from 'react-css-modules';

import ProfilePreview from './components/ProfilePreview';
import styles from './styles.css';

const Header = () => (
  <header styleName="container">
    <ProfilePreview />
  </header>
)

export default CSSModules(Header, styles);
