import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import ProfileMenu from '../containers/ProfileMenu';
import styles from '../styles/components/ProfilePreview.css';

const ProfilePreviewView = ({
  name,
  image,
  toggleMenu,
  children,
}) => (
  <div styleName="container">
    <span styleName="name">{name}</span>
    <div styleName="avatar">
      <img
        styleName="avatar-image"
        src={image}
        alt="avatar"
        onClick={toggleMenu}
      />
    </div>
    <ProfileMenu />
  </div>
)

ProfilePreviewView.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string.isRequired,

  toggleMenu: PropTypes.func.isRequired
}

export default CSSModules(ProfilePreviewView, styles);
