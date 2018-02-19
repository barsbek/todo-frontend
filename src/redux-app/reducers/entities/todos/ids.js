import {
  LISTS_GET_SUCCESS,
  TODO_CREATE_SUCCESS,
  TODO_REMOVE_SUCCESS,
} from 'redux-app/constants';

const ids = (state = [], action) => {
  switch(action.type) {
  case LISTS_GET_SUCCESS:
    return onTodosGet(state, action);
  case TODO_CREATE_SUCCESS:
    return [...state, action.payload.id];
  case TODO_REMOVE_SUCCESS:
    return state.filter(id => id !== action.payload.id);
  default: 
    return state;
  }
}

export default ids;

const onTodosGet = (state, action) => {
  const { todos } = action.payload.entities;
  const newIds = [...state];
  for(let id in todos) {
    if(newIds.indexOf(id) < 0) newIds.push(id)
  }
  return newIds;
}
