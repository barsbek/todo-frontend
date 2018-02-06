import React from 'react';
import PropTypes from 'prop-types';

import InputWithDelay from './InputWithDelay';

const List = ({
  id,
  title,
  updated_at,
  onDeleteClick,
  onTitleChange,
}) => (
  <article>
    <header>
      <h3>
        <InputWithDelay
          value={title}
          onChangeStop={title => onTitleChange(id, { title })}
        />
      </h3>
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
  title: PropTypes.string,
  updated_at: PropTypes.string,
  onDeleteClick: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
}

export default List;
