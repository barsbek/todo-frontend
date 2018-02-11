const ids = (state = [], action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS':
    const { todos } = action.payload.entities;
    const newIds = [...state];
    for(let id in todos) {
      if(newIds.indexOf(id) < 0) newIds.push(id)
    }
    return newIds;

  case 'TODO_CREATE_SUCCESS':
    return [...state, action.payload.id];
  case 'TODO_REMOVE_SUCCESS':
    return state.filter(id => id !== action.payload.id);
  default: 
    return state;
  }
}

export default ids;
