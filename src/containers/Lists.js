import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListsView from '../components/ListsView';
import { addNew } from '../actions/list';
import { fetchLists } from '../actions/lists';
import { getLists, getLoading, hasNewList } from '../reducers/entities/lists';

class Lists extends Component {
  componentWillMount() {
    this.props.fetchLists();
  }

  render = () => {
    const { lists, loading, addNew, hasNewList } = this.props;
    return [
      (loading && "...Loading"),
      <ListsView
        key="lists-view"
        lists={lists}
        addNewList={addNew}
        withUnsaved={hasNewList}
      />
    ]
  }
}

const mapState = state => ({
  lists: getLists(state),
  loading: getLoading(state),
  hasNewList: hasNewList(state),
})

export default connect(
  mapState,
  { addNew, fetchLists }
)(Lists);
