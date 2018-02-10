import React from 'react';
import PropTypes from 'prop-types';

import InputWithDelay from './InputWithDelay';

const TodoView = ({
  title,
}) => (
  <div>
    <InputWithDelay
      value={title}
      onChangeStop={() => {}}
    />
    <button onClick={() => ({})}>
      x
    </button>
  </div>
)

TodoView.propTypes = {
  title: PropTypes.string,
}

export default TodoView;
