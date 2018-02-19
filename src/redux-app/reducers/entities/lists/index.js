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
