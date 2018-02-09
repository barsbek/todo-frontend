import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS': 
    const nextState = {...state};
    const { entities, result } = action.payload;
      // TODO: use lodash's merge function instead
    result.forEach(id => {
      nextState[id] = entities.lists[id];
    });
    return nextState;
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
});

const getList = (state, id) => state[id];

export const getLists = (state) => {
  const { lists } = state.entities;
  const { ids, byId } = lists;
  return ids.map(id => getList(byId, id));
}
