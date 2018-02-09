import { combineReducers } from 'redux';

import { handleUpdate } from './list';

const byId = (state = {}, action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS': 
    const { lists } = action.payload.entities;
    return {...state, ...lists};
  case 'LIST_UPDATE_SUCCESS':
    return handleUpdate(state, action);
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
  default: 
    return state;
  }
}

let pending = [];
const loading = (state = false, action) => {
  const newState = pending.length > 0;
  switch(action.type) {
  case 'LISTS_GET_SUCCESS':
  case 'LISTS_GET_FAILURE':
  
  case 'LIST_UPDATE_SUCCESS':
  case 'LIST_FAILURE':
    pending.pop();
    return newState;
  case 'LISTS_GET_REQUEST':
  case 'LIST_REQUEST':
    pending.push(true);
    return newState;

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
