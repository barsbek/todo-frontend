const getTodo = (state, id) => state[id];

export const getTodos = (state, ids) => {
  const { byId } = state.entities.todos;
  return ids.map(id => getTodo(byId, id));
}
