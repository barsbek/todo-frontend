import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import RemoveIcon from './images/remove.inline.svg';

const ButtonRemove = ({ onClick, className }) => (
  <button
    styleName="button"
    className={className}
    onClick={onClick}>
      <RemoveIcon styleName="icon" />
  </button>
)

export default CSSModules(ButtonRemove, styles);
