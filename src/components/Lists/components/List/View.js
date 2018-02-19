import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import InputWithDelay from 'components/InputWithDelay';
import Todos from 'components/Todos';

import styles from './styles.css';
import ButtonRemove from 'components/ButtonRemove';

const ListView = ({
  id,
  title,
  updated_at,
  todoIds,
  onRemoveClick,
  onTitleChange,
  addNewTodo,
  isFetching,
}) => (
  <article styleName="container">
    <h3 styleName="header">
      <InputWithDelay
        value={title}
        styleName="title"
        onChangeStop={title => onTitleChange({ id, title })}
      />
      <ButtonRemove
        onClick={() => onRemoveClick({ id })} />
    </h3>
    <Todos ids={todoIds} />
    <footer>
      {(id !== 'new') &&
        <button styleName="todo-add-button" onClick={() => addNewTodo(id)}>
          +
        </button>}
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
