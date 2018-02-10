import { combineReducers } from 'redux';

import * as todo from './todo';

const byId = (state = {}, action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS': 
    let nextState = {...state};
    const { todos } = action.payload.entities;
    for(let id in todos) {
      nextState[id] = todos[id];
    }
    return nextState;

  case 'TODO_ADD_NEW':
    return todo.addNew(state, action);
  case 'TODO_REMOVE_NEW':
    return todo.removeNew(state, action);
  case 'TODO_CREATE_SUCCESS':
    return todo.create(state, action);
  case 'TODO_UPDATE_SUCCESS':
    return todo.update(state, action);
  case 'TODO_REMOVE_SUCCESS':
    return todo.remove(state, action);
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

  case 'TODO_CREATE_SUCCESS':
    return [...state, action.payload.id];
  case 'TODO_REMOVE_SUCCESS':
    return state.filter(id => id !== action.payload.id);
  default: 
    return state;
  }
}

export default combineReducers({
  byId,
  ids,
});

const getTodo = (state, id) => state[id];

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
