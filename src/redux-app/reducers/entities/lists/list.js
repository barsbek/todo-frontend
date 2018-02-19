export const onRequest = (state, action) => {
  const { id } = action.request;
  return {
    ...state,
    [id]: { ...state[id], isFetching: true }
  }
}

export const create = (state, action) => {
  const list = action.response;
  const newState = {...state};
  newState[list.id] = list;
  delete newState['new'];
  return newState;
}

export const update = (state, action) => {
  const { result: id, entities } = action.response;
  return {
    ...state,
    [id]: entities.lists[id]
  }
}

export const destroy = (state, action) => {
  const { id } = action.response;
  const newState = { ...state };
  delete newState[id];
  return newState;
}

export const addNew = (state, action) => {
  return { ...state, new: {id: 'new', todos: []} }
}

export const removeNew = (state, action) => {
  const newState = {...state};
  delete newState['new'];
  return newState;  
}

export const addNewTodo = (state, action) => {
  const { id, list_id } = action.todo;
  const todoIds = state[list_id];
  return {
    ...state,
    [list_id]: [...todoIds, id],
  };
}

export const removeNewTodo = (state, action) => {
  const { id, list_id } = action.todo;
  const todos = state[list_id];
  return {
    ...state,
    [list_id]: todos.filter(t => t !== id),
  }
}

export const onTodoCreate = (state, action) => {
  const { id, list_id } = action.response;
  const newState = {...state};
  const list = newState[list_id];
  list.todos.push(id);
  return newState;
}

export const onTodoRemove = (state, action) => {
  const { id, list_id } = action.response;
  const newState = {...state};
  const list = newState[list_id];
  list.todos = list.todos.filter(t => t !== id);
  return newState;
}
