import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListsView from '../components/ListsView';
import { getLists } from '../actions/lists';

class Lists extends Component {
  componentWillMount() {
    this.props.getLists();
  }

  render = () => (
    <ListsView lists={this.props.lists} />
  )
}

const mapState = state => ({
  lists: state.lists.data
})

export default connect(
  mapState,
  { getLists }
)(Lists);
