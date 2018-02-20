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
  <article styleName="list">
    <h3 styleName="list-header">
      <InputWithDelay
        value={title}
        styleName="list-title"
        onChangeStop={title => onTitleChange({ id, title })}
      />
      <ButtonRemove
        styleName="list-remove-button"
        className={isFetching && "button-loading"}
        onClick={() => onRemoveClick({ id })}
      />
    </h3>
    <div styleName="list-todos">
      <Todos ids={todoIds} />
    </div>
    <footer>
      {(id !== 'new') &&
        <button
          styleName="todo-add-button"
          onClick={() => addNewTodo(id)}>
          +
        </button>}
      <span styleName="list-updated-at">
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
