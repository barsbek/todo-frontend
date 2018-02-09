import { combineReducers } from 'redux';
import user from './user';
import newUser from './newUser';
import design from './design';
import entities from './entities';

export default combineReducers({
  user,
  newUser,
  design,
  entities,
})
