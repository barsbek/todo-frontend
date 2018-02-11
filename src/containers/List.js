import { connect } from 'react-redux';
import moment from 'moment';

import { handleChange, handleRemove } from '../actions/lists';
import { addNewTodo } from '../actions/todos';
import { getTodosIds } from '../reducers/entities/lists';

import ListView from '../components/ListView';

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
