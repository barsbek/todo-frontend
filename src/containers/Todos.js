import { connect } from 'react-redux';
import TodosView from '../components/TodosView';

import { getTodos } from '../reducers/todos';

const mapState = (state, ownProps) => ({
  todos: getTodos(state, ownProps.ids),
})

export default connect(mapState)(TodosView);
