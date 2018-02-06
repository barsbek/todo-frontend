import React from 'react';
import PropTypes from 'prop-types';

const ListsView = ({
  lists
}) => (
  <ul>
    {lists.map(list => (
      <li key={list.id}>
        {list.id}: {list.title}
      </li>
    ))}
  </ul>
)

ListsView.propTypes = {
  lists: PropTypes.array.isRequired
}

export default ListsView;
