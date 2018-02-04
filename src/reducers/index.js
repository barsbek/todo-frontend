import { combineReducers } from 'redux';
import user from './user';
import newUser from './newUser';

export default combineReducers({
  user,
  newUser
});
