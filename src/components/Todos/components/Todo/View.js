import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import InputWithDelay from 'components/InputWithDelay';
import ButtonRemove from 'components/ButtonRemove';
import styles from './styles.css';

const TodoView = ({
  title,
  isFetching,
  onTitleChange,
  onRemoveClick,
}) => (
  <div styleName="container">
    <InputWithDelay
      styleName="title"
      value={title}
      onChangeStop={onTitleChange}
    />
    <ButtonRemove
      styleName="remove-button"
      className={isFetching && "button-loading"}
      onClick={onRemoveClick}
    />
  </div>
)

TodoView.propTypes = {
  title: PropTypes.string,
  isFetching: PropTypes.bool,
  onTitleChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
}

export default CSSModules(TodoView, styles);
