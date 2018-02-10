export const create = (state, action) => {
  const newState = {...state};
  const todo = action.payload;
  newState[todo.id] = todo;
  return newState;
}

export const update = (state, action) => {
  const todo = action.payload;
  return { ...state, [todo.id]: todo }
}

export const remove = (state, action) => {
  const newState = { ...state };
  const { id } = action.payload;
  delete newState[id];
  return newState;
}

export const addNew = (state, action) => {
  const { todo } = action;
  return { ...state, [todo.id]: todo }
}

export const removeNew = (state, action) => {
  const newState = {...state};
  delete newState[action.id];

  return newState;
}
