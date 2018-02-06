import React from 'react';
import { connect } from 'react-redux';
import { deleteList } from '../actions/lists';
import ListView from '../components/ListView';

export default connect(
  null,
  { onDeleteClick: deleteList }
)(ListView);
