import { combineReducers } from 'redux';
import user from './user';
import newUser from './newUser';
import design from './design';
import entities from './entities';
import errors from './errors';
import { USER_SIGN_OUT } from '../constants'

const appReducer = combineReducers({
  user,
  newUser,
  design,
  entities,
  errors,
})

const rootReducer = (state, action) => {
  if(action.type === USER_SIGN_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;
