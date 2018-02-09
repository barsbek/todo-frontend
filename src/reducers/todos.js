import { combineReducers } from 'redux';

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

const loading = (state = false, action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS':
  case 'LISTS_GET_FAILURE':
    return false;
  case 'LISTS_GET_REQUEST':
    return true;
  default:
    return state;
  }
}

const error = (state = null, action) => {
  switch(action.type) {
  case 'LISTS_GET_FAILURE':
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
})
