import { connect } from 'react-redux';
import moment from 'moment';

import { handleChange, handleRemove } from 'redux-app/actions/lists';
import { addNewTodo } from 'redux-app/actions/todos';
import { getTodosIds } from 'redux-app/reducer/entities/lists';

import ListView from './View';

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
