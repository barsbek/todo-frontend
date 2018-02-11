import { combineReducers } from 'redux';

import todos from './entities/todos';
import lists from './entities/lists';

const entities = combineReducers({
  lists,
  todos,
});

export default entities;
