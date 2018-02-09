import { combineReducers } from 'redux';
import merge from 'lodash.merge';

import todos from './todos';
import lists from './lists';

const entities = combineReducers({
  lists,
  todos,
});

export default entities;
