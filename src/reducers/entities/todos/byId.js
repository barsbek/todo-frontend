import * as todo from './todo';
import {
  LISTS_GET_SUCCESS,
  TODO_CREATE_SUCCESS,
  TODO_UPDATE_SUCCESS,
  TODO_REMOVE_SUCCESS,
  TODO_ADD_NEW,
  TODO_REMOVE_NEW,
} from '../../../constants';

const byId = (state = {}, action) => {
  switch(action.type) {
  case LISTS_GET_SUCCESS: 
    const { todos } = action.payload.entities;
    return { ...state, ...todos }
  case TODO_CREATE_SUCCESS:
    return todo.create(state, action);
  case TODO_UPDATE_SUCCESS:
    return todo.update(state, action);
  case TODO_REMOVE_SUCCESS:
    return todo.remove(state, action);
  case TODO_ADD_NEW:
    return todo.addNew(state, action);
  case TODO_REMOVE_NEW:
    return todo.removeNew(state, action);
  default:
    return state;
  }
}

export default byId;
