import { connect } from 'react-redux';
import TodosView from './View';

import { getTodos } from './state';

const mapState = (state, ownProps) => ({
  todos: getTodos(state, ownProps.ids),
})

export default connect(mapState)(TodosView);
