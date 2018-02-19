import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import List from '../List';
import styles from './styles.css';

const ListsView = ({
  lists,
  addNewList,
  withUnsaved,
}) => (
  <div styleName="container">
    <div key="lists" styleName="lists">
      {lists.map(list => <List key={list.id} {...list} />)}
    </div>
    {!withUnsaved &&
      <button
        key="new-list"
        styleName="new-list-button"
        onClick={addNewList}>
          +
      </button>
    }
  </div>
)

ListsView.propTypes = {
  lists: PropTypes.array.isRequired,
  addNewList: PropTypes.func.isRequired,
}

export default CSSModules(ListsView, styles);
