export const getTodosIds = (state, id) => {
  const { newTodos, byId } = state.entities.lists;
  const { todos } = byId[id];
  return todos.concat(newTodos[id] || []);
}
