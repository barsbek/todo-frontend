import { combineReducers } from 'redux';

import * as list from './list';

const byId = (state = {}, action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS': 
    const { lists } = action.payload.entities;
    return {...state, ...lists};
  case 'LIST_UPDATE_SUCCESS':
    return list.update(state, action);
  case 'LIST_REMOVE_SUCCESS':
    return list.destroy(state, action);
  case 'ADD_NEW_LIST':
    return list.addNew(state, action);
  case 'REMOVE_NEW_LIST':
    return list.removeNew(state, action);
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

let pending = [];
const loading = (state = false, action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS':
  case 'LISTS_GET_FAILURE':
  
  case 'LIST_UPDATE_SUCCESS':
  case 'LIST_REMOVE_SUCCESS':
  case 'LIST_FAILURE':
    pending.pop();
    return pending.length > 0;
  case 'LISTS_GET_REQUEST':
  case 'LIST_REQUEST':
    pending.push(true);
    return pending.length > 0;

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
  loading,
  error,
});

const getList = (state, id) => state[id];

export const getLists = (state) => {
  const { lists } = state.entities;
  const { ids, byId } = lists;
  return ids.map(id => getList(byId, id));
}

export const getLoading = (state) => {
  return state.entities.lists.loading;
}

export const hasNewList = (state) => {
  return state.entities.lists.ids.indexOf('new') > 0;
}
