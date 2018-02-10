import React from 'react';
import PropTypes from 'prop-types';

import InputWithDelay from './InputWithDelay';

const TodoView = ({
  title,
  onTitleChange,
  onRemoveClick,
}) => (
  <div>
    <InputWithDelay
      value={title}
      onChangeStop={onTitleChange}
    />
    <button onClick={onRemoveClick}>
      x
    </button>
  </div>
)

TodoView.propTypes = {
  title: PropTypes.string,
  onTitleChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
}

export default TodoView;
