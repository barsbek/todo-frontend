import { combineReducers } from 'redux';

import byId from './byId';
import ids from './ids';

export default combineReducers({ byId, ids });

const getTodo = (state, id) => state[id];

export const getTodos = (state, ids) => {
  const { byId } = state.entities.todos;
  return ids.map(id => getTodo(byId, id));
}

export const getIds = (state) => {
  return state.entities.todos.ids;
}
