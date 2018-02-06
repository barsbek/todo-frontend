import React from 'react';
import PropTypes from 'prop-types';

const List = ({
  id,
  title,
  updated_at,
  onDeleteClick,
}) => (
  <article>
    <header>
      <h3>{title}</h3>
      <button onClick={() => onDeleteClick(id)}>x</button>
    </header>
    <div>
      {/* todos */}
    </div>
    <footer>
      <span>Updated at: {updated_at}</span>
      <span>color</span>
    </footer>
  </article>
);

List.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default List;
