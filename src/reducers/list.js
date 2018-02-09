export const update = (state, action) => {
  const { result: id, entities } = action.payload;
  return {
    ...state,
    [id]: entities.lists[id]
  }
}

export const destroy = (state, action) => {
  const { id } = action.payload;
  const newState = { ...state };
  delete newState[id];
  return newState;
}

export const addNew = (state, action) => {
  const newState = {...state};
  newState['new'] = {id: 'new'};
  return newState;
}

export const removeNew = (state, action) => {
  const newState = {...state};
  delete newState['new'];
  return newState;  
} 
