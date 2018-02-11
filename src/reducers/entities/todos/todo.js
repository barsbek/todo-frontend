export const create = (state, action) => {
  let newState = {...state};
  const todo = action.payload;
  newState[todo.id] = todo;
  if(action.localParams) {
    const { id } = action.localParams;
    delete newState[id];
  }
  return newState;
}

export const update = (state, action) => {
  return handleChange(state, action);
}

export const addNew = (state, action) => {
  return handleChange(state, action);
}

export const remove = (state, action) => {
  return handleRemove(state, action);
}

export const removeNew = (state, action) => {
  return handleRemove(state, action);
}

const handleChange = (state, action) => {
  const todo = action.payload;
  return { ...state, [todo.id]: todo }
}

export const handleRemove = (state, action) => {
  const newState = { ...state };
  const { id } = action.payload;
  delete newState[id];

  return newState;
}
