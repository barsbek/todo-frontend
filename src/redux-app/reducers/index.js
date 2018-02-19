import { combineReducers } from 'redux';
import user from './user';
import newUser from './newUser';
import design from './design';
import entities from './entities';

const appReducer = combineReducers({
  user,
  newUser,
  design,
  entities,
})

const rootReducer = (state, action) => {
  if(action.type === 'USER_SIGN_OUT') {
    state = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;
