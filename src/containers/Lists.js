import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListsView from '../components/ListsView';
import { getLists, addNewList } from '../actions/lists';

class Lists extends Component {
  componentWillMount() {
    this.props.getLists();
  }

  render = () => {
    const { lists, addNewList } = this.props;
    const last = lists[lists.length - 1];
    const withUnsaved = (last && last.id === 'new');
    return <ListsView
      lists={lists}
      addNewList={addNewList}
      withUnsaved={withUnsaved}
    />
  }
}

const mapState = state => ({
  lists: state.lists.data
})

export default connect(
  mapState,
  { getLists, addNewList }
)(Lists);
