import React from 'react';
import PropTypes from 'prop-types';

const HeaderView = ({ name, image }) => (
  <header>
    <div>
      <span>{name}</span>
      <img src={image} alt="avatar" width="200"/>
    </div>
  </header>
)

HeaderView.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default HeaderView;
