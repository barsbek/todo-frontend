import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import InputWithDelay from './InputWithDelay';
import Todos from '../containers/Todos';

import styles from '../styles/components/List.css';

const ListView = ({
  id,
  title,
  updated_at,
  todoIds,
  onRemoveClick,
  onTitleChange,
  addNewTodo,
}) => (
  <article styleName="container">
    <h3 styleName="header">
      <InputWithDelay
        value={title}
        styleName="title"
        onChangeStop={title => onTitleChange(id, { title })}
      />
      <button styleName="remove-button" onClick={() => onRemoveClick(id)}>
      </button>
    </h3>
    <Todos ids={todoIds} />
    <footer>
      <button styleName="todo-add-button" onClick={() => addNewTodo(id)}>
        +
      </button>
      <span styleName="updated-at">
        Updated at {updated_at}
      </span>
    </footer>
  </article>
);

ListView.propTypes = {
  title: PropTypes.string,
  updated_at: PropTypes.string,
  todoIds: PropTypes.array,
  onRemoveClick: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  addNewTodo: PropTypes.func.isRequired,
}

export default CSSModules(ListView, styles);
