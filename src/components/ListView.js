import React from 'react';
import PropTypes from 'prop-types';

import InputWithDelay from './InputWithDelay';
import Todos from '../containers/Todos';

const List = ({
  id,
  title,
  updated_at,
  todos,
  onRemoveClick,
  onTitleChange,
}) => (
  <article>
    <header>
      <h3>
        <InputWithDelay
          value={title}
          onChangeStop={title => onTitleChange(id, { title })}
        />
      </h3>
      <button onClick={() => onRemoveClick(id)}>x</button>
    </header>
    <div>
      <Todos ids={todos}/>
    </div>
    <footer>
      <span>Updated at: {updated_at}</span>
      <span>color</span>
    </footer>
  </article>
);

List.propTypes = {
  title: PropTypes.string,
  updated_at: PropTypes.string,
  todos: PropTypes.array,
  onRemoveClick: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
}

export default List;
