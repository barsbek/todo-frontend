import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../containers/Todo';

const TodosView = ({ todos, }) => (
  todos.map(t => <Todo key={t.id} todo={t} />)
)

TodosView.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodosView;
