import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import List from './components/List';
import styles from './styles.css';
import AddIcon from './icons/add.inline.svg';

const ListsView = ({
  lists,
  addNewList,
  withUnsaved,
}) => (
  <div>
    <div key="lists" styleName="lists">
      {lists.map(list => <List key={list.id} {...list} />)}
    </div>
    {!withUnsaved &&
      <button
        key="new-list"
        styleName="add-list-button"
        onClick={addNewList}>
          <AddIcon styleName="add-icon"/>
      </button>
    }
  </div>
)

ListsView.propTypes = {
  lists: PropTypes.array.isRequired,
  addNewList: PropTypes.func.isRequired,
}

export default CSSModules(ListsView, styles);
