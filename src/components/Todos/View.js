import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Todo from '../Todo';
import styles from "./styles.css";

const TodosView = ({ todos, }) => (
  <div styleName="container">
    {todos.map(t => <Todo key={t.id} todo={t} />)}
  </div>
)

TodosView.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default CSSModules(TodosView, styles);
