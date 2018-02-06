import React from 'react';
import PropTypes from 'prop-types';

import List from '../containers/List';

const ListsView = ({
  lists,
  addNewList,
  withUnsaved,
}) => [
  <div key="lists">
    {lists.map(list => (
      <List key={list.id || 'new'} {...list} />
    ))}
  </div>,
  (!withUnsaved &&
    <button key="new-list" onClick={addNewList}>+</button>
  )
]

ListsView.propTypes = {
  lists: PropTypes.array.isRequired,
  addNewList: PropTypes.func.isRequired,
}

export default ListsView;
