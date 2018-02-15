import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/components/ButtonRemove.css';
import RemoveIcon from '../styles/icons/remove.inline.svg';

const ButtonRemove = ({ onClick }) => (
  <button
    styleName="remove-button"
    onClick={onClick}>
      <RemoveIcon className="remove-icon" />
  </button>
)

export default CSSModules(ButtonRemove, styles);
