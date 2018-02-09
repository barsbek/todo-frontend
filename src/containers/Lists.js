import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListsView from '../components/ListsView';
import * as actions from '../actions/lists';
import { getLists, getLoading } from '../reducers/lists';

class Lists extends Component {
  componentWillMount() {
    this.props.getLists();
  }

  render = () => {
    const { lists, loading, addNewList } = this.props;
    const last = lists[lists.length - 1];
    const withUnsaved = (last && last.id === 'new');
    return [
      (loading && "...Loading"),
      <ListsView
        key="lists-view"
        lists={lists}
        addNewList={addNewList}
        withUnsaved={withUnsaved}
      />
    ]
  }
}

const mapState = state => ({
  lists: getLists(state),
  loading: getLoading(state),
})

export default connect(
  mapState,
  { ...actions }
)(Lists);
