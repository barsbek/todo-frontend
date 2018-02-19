import { combineReducers } from 'redux';

import byId from './byId';
import ids from './ids';
import newTodos from './newTodos';
import loading from './loading';
import error from './error';

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
  const { todos } = byId[id];
  return todos.concat(newTodos[id] || []);
}
