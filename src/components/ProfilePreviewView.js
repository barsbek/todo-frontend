import React from 'react';
import PropTypes from 'prop-types';

const ProfilePreviewView = ({
  name,
  image,
  toggleMenu,
}) => (
  <div>
    <span>{name}</span>
    <img
      src={image}
      alt="avatar"
      width="200"
      onClick={toggleMenu}
    />
  </div>
)

ProfilePreviewView.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string.isRequired,

  toggleMenu: PropTypes.func.isRequired
}

export default ProfilePreviewView;
