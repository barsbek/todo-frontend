import React from 'react';
import PropTypes from 'prop-types';

import List from '../containers/List';

const ListsView = ({
  lists
}) => (
  <ul>
    {lists.map(list => (
      <List key={list.id} {...list} />
    ))}
  </ul>
)

ListsView.propTypes = {
  lists: PropTypes.array.isRequired
}

export default ListsView;
