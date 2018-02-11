import { combineReducers } from 'redux';

import * as list from './list';

const byId = (state = {}, action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS': 
    const { lists } = action.payload.entities;
    return {...state, ...lists};
  case 'LIST_CREATE_SUCCESS':
    return list.create(state, action);
  case 'LIST_UPDATE_SUCCESS':
    return list.update(state, action);
  case 'LIST_REMOVE_SUCCESS':
    return list.destroy(state, action);
  case 'ADD_NEW_LIST':
    return list.addNew(state, action);
  case 'REMOVE_NEW_LIST':
    return list.removeNew(state, action);

  case 'TODO_CREATE_SUCCESS':
    return list.onTodoCreate(state, action);
  case 'TODO_REMOVE_SUCCESS':
    return list.onTodoRemove(state, action);
  default:
    return state;
  }
}

const ids = (state = [], action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS':
    const { result } = action.payload;
    const withoutDuplications = result.filter(r => state.indexOf(r) < 0);
    return state.concat(withoutDuplications);
  case 'LIST_CREATE_SUCCESS':
    const newId = action.payload.id;
    return state.map(id => id === 'new' ? newId : id);
  case 'LIST_REMOVE_SUCCESS':
    return state.filter(id => id !== action.payload.id);
  case 'ADD_NEW_LIST':
    return [...state, 'new'];
  case 'REMOVE_NEW_LIST':
    return state.filter(t => t !== 'new');
  default:
    return state;
  }
}

const newTodos = (state = {}, action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS': {
    const { lists } = action.payload.entities;
    let newState = {...state};
    for(let list_id in lists) {
      newState[list_id] = [];
    }
    return newState;
  }
  case 'TODO_ADD_NEW':
    return list.addNewTodo(state, action);
  case 'TODO_REMOVE_NEW':
    return list.removeNewTodo(state, action);
  case 'TODO_CREATE_SUCCESS': {
    const { list_id } = action.payload;
    let newState = {...state};
    newState[list_id].pop();
    return newState;
  }
  default:
    return state;
  }
}

let hasPendings = [];
const loading = (state = false, action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS':
  case 'LISTS_GET_FAILURE':
  case 'LIST_UPDATE_SUCCESS':
  case 'LIST_REMOVE_SUCCESS':
  case 'LIST_FAILURE':
    hasPendings.pop();
    return hasPendings.length > 0;
  case 'LISTS_GET_REQUEST':
  case 'LIST_REQUEST':
    hasPendings.push(true);
    return hasPendings.length > 0;

  default:
    return state;
  }
}

const error = (state = null, action) => {
  switch(action.type) {
  case 'LISTS_GET_FAILURE':
  case 'LIST_FAILURE':
    return action.payload;
  default:
    return state;
  }
}

export default combineReducers({
  byId,
  ids,
  newTodos,
  loading,
  error,
});

const getList = (state, id) => state[id];

export const getLists = (state) => {
  const { ids, byId } = state.entities.lists;
  return ids.map(id => getList(byId, id));
}

export const getLoading = (state) => {
  return state.entities.lists.loading;
}

export const hasNewList = (state) => {
  return state.entities.lists.ids.indexOf('new') > 0;
}

export const getTodosIds = (state, id) => {
  const { newTodos, byId } = state.entities.lists;
  return byId[id].todos.concat(newTodos[id]);
}
