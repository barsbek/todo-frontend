import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListsView from '../components/ListsView';
import * as actions from '../actions/lists';
import { getLists, getLoading, hasNewList } from '../reducers/lists';

class Lists extends Component {
  componentWillMount() {
    this.props.getLists();
  }

  render = () => {
    const { lists, loading, addNewList, hasNewList } = this.props;
    return [
      (loading && "...Loading"),
      <ListsView
        key="lists-view"
        lists={lists}
        addNewList={addNewList}
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
  { ...actions }
)(Lists);
