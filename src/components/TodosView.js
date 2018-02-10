import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../containers/Todo';

const TodosView = ({
  todos,
}) => (
  <div>
    {todos.map(t => (
      <Todo key={t.id} {...t} />
    ))}
  </div>
)

TodosView.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodosView;
