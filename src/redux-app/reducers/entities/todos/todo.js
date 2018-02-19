export const onRequest = (state, action) => {
  const { id } = action.request;
  return {
    ...state,
    [id]: { ...state[id], isFetching: true }
  };
}

export const create = (state, action) => {
  let newState = {...state};
  const todo = action.response;
  newState[todo.id] = todo;
  if(action.localParams) {
    const { id } = action.localParams;
    delete newState[id];
  }
  return newState;
}

export const update = (state, action) => {
  const todo = action.response;
  return { ...state, [todo.id]: todo }
}

export const remove = (state, action) => {
  const newState = { ...state };
  const { id } = action.response;
  delete newState[id];

  return newState;
}

export const addNew = (state, action) => {
  const { todo } = action;
  return { ...state, [todo.id]: todo }
}

export const removeNew = (state, action) => {
  const newState = { ...state };
  const { id } = action.todo;
  delete newState[id];

  return newState;
}
