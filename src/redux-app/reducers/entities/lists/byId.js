import * as list from './list';
import {
  LISTS_GET_SUCCESS,

  LIST_REQUEST,
  LIST_CREATE_SUCCESS,
  LIST_UPDATE_SUCCESS,
  LIST_REMOVE_SUCCESS,
  LIST_ADD_NEW,
  LIST_REMOVE_NEW,

  TODO_CREATE_SUCCESS,
  TODO_REMOVE_SUCCESS,
} from 'redux-app/constants';

export const byId = (state = {}, action) => {
  switch(action.type) {
  case LISTS_GET_SUCCESS:
    const { lists } = action.response.entities;
    return {...state, ...lists};
  case LIST_REQUEST:
    return list.onRequest(state, action);
  case LIST_CREATE_SUCCESS:
    return list.create(state, action);
  case LIST_UPDATE_SUCCESS:
    return list.update(state, action);
  case LIST_REMOVE_NEW:
    return list.destroy(state, action);
  case LIST_ADD_NEW:
    return list.addNew(state, action);
  case LIST_REMOVE_NEW:
    return list.removeNew(state, action);

  case TODO_CREATE_SUCCESS:
    return list.onTodoCreate(state, action);
  case TODO_REMOVE_SUCCESS:
    return list.onTodoRemove(state, action);
  default:
    return state;
  }
}

export default byId;
