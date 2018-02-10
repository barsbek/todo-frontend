import React from 'react';
import { connect } from 'react-redux';
import {
  removeList,
  createList,
  updateList,
  removeNewList,
} from '../actions/lists';

import { addNewTodo } from '../actions/todos';
import { getTodosIds } from '../reducers/lists';

import ListView from '../components/ListView';

const onTitleChange = (id, params) => (
  id === 'new' ? createList(params) : updateList(id, params)
)

const onRemoveClick = id => (
  id == 'new' ? removeNewList() : removeList(id)
)

const mapState = (state, ownProps) => ({
  todoIds: getTodosIds(state, ownProps.id)
})

export default connect(
  mapState,
  {
    onRemoveClick,
    onTitleChange,
    addNewTodo,
  }
)(ListView);
