import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import InputWithDelay from './InputWithDelay';
import ButtonRemove from './ButtonRemove';
import styles from '../styles/components/Todo.css';

const TodoView = ({
  title,
  onTitleChange,
  onRemoveClick,
}) => (
  <div styleName="container">
    <InputWithDelay
      styleName="title"
      value={title}
      onChangeStop={onTitleChange}
    />
    <ButtonRemove onClick={onRemoveClick} />
  </div>
)

TodoView.propTypes = {
  title: PropTypes.string,
  onTitleChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
}

export default CSSModules(TodoView, styles);
