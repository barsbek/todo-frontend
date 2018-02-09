import React from 'react';
import { connect } from 'react-redux';
import {
  removeList,
  createList,
  updateList,
  removeNewList,
} from '../actions/lists';

import ListView from '../components/ListView';

const onTitleChange = (id, params) => (
  id === 'new' ? createList(params) : updateList(id, params)
)

const onRemoveClick = id => (
  id == 'new' ? removeNewList() : removeList(id)
)

export default connect(
  null,
  { onRemoveClick, onTitleChange }
)(ListView);
