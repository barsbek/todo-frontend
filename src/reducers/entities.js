import { combineReducers } from 'redux';

import todos from './todos';
import lists from './lists';

const entities = combineReducers({
  lists,
  todos,
});

export default entities;
