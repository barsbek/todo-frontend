import { combineReducers } from 'redux';
import user from './user';
import newUser from './newUser';
import design from './design';
import lists from './lists';

export default combineReducers({
  user,
  newUser,
  design,
  lists,
})
