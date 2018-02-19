import { connect } from 'react-redux';
import moment from 'moment';

import { handleChange, handleRemove } from 'redux-app/actions/lists';
import { addNewTodo } from 'redux-app/actions/todos';
import ListView from './View';

export const getTodosIds = (state, id) => {
  const { newTodos, byId } = state.entities.lists;
  const { todos } = byId[id];
  return todos.concat(newTodos[id] || []);
}

const mapState = (state, ownProps) => ({
  todoIds: getTodosIds(state, ownProps.id),
  updated_at: moment(ownProps.updated_at).format("MMM Do")
})

export default connect(
  mapState,
  {
    onTitleChange: handleChange,
    onRemoveClick: handleRemove,
    addNewTodo,
  }
)(ListView);
