import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoView from './View.js';

import { handleChange, handleRemove } from '../../actions/todos';

class Todo extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
  }

  handleTitleChange = (title) => {
    const { todo, handleChange } = this.props;
    handleChange({ ...todo, title });
  }

  handleRemoveClick = () => {
    const { todo, handleRemove } = this.props;
    handleRemove(todo);
  }

  render = () => (
    <TodoView
      {...this.props.todo}
      onTitleChange={this.handleTitleChange}
      onRemoveClick={this.handleRemoveClick}
    />
  )
}

export default connect(
  null,
  { handleChange, handleRemove }
)(Todo);
