import React from 'react';
import { connect } from 'react-redux';
import {
  deleteList,
  createList,
  updateList,
  deleteNewList,
} from '../actions/lists';

import ListView from '../components/ListView';

const onTitleChange = (id, params) => (
  id === 'new' ? createList(params) : updateList(id, params)
)

const onDeleteClick = id => (
  id == 'new' ? deleteNewList() : deleteList(id)
)

export default connect(
  null,
  { onDeleteClick, onTitleChange }
)(ListView);
