import { connect } from 'react-redux';
import TodosView from './View';

const getTodo = (state, id) => state[id];

export const getTodos = (state, ids) => {
  const { byId } = state.entities.todos;
  return ids.map(id => getTodo(byId, id));
}

const mapState = (state, ownProps) => ({
  todos: getTodos(state, ownProps.ids),
})

export default connect(mapState)(TodosView);
