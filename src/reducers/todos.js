import { combineReducers } from 'redux';

import { getTodo } from './todo';

const byId = (state = {}, action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS': 
    let nextState = {...state};
    const { todos } = action.payload.entities;
    for(let id in todos) {
      nextState[id] = todos[id];
    }
    return nextState;
  default:
    return state;
  }
}

const ids = (state = [], action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS':
    const { todos } = action.payload.entities;
    const newIds = [...state];
    for(let id in todos) {
      newIds.indexOf(id) < 0 ? newIds.push(id) : null;
    }
    return newIds;
  default: 
    return state;
  }
}

export default combineReducers({
  byId,
  ids,
});

export const getAllTodos = (state) => {
  const { ids, byId } = state.entities.todos;
  return ids.map(id => getTodo(byId, id));
}

export const getTodos = (state, ids) => {
  const { byId } = state.entities.todos;
  return ids.map(id => getTodo(byId, id));
}

export const getIds = (state) => {
  return state.entities.todos.ids;
}
