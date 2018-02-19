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
    return [...state, action.response.id];
  case TODO_REMOVE_SUCCESS:
    return state.filter(id => id !== action.response.id);
  default: 
    return state;
  }
}

export default ids;

const onTodosGet = (state, action) => {
  const { todos } = action.response.entities;
  const newIds = [...state];
  for(let id in todos) {
    if(newIds.indexOf(id) < 0) newIds.push(id)
  }
  return newIds;
}
