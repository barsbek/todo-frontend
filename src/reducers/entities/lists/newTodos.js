import {
  LISTS_GET_SUCCESS,
  LIST_CREATE_SUCCESS,
  TODO_CREATE_SUCCESS,
  TODO_ADD_NEW,
  TODO_REMOVE_NEW,
} from 'constants/actionTypes';

import { addNewTodo, removeNewTodo } from './list';

const newTodos = (state = {}, action) => {
  switch(action.type) {
  case LISTS_GET_SUCCESS: {
    const { lists } = action.payload.entities;
    let newState = {...state};
    for(let list_id in lists) {
      newState[list_id] = [];
    }
    return newState;
  }
  case LIST_CREATE_SUCCESS:
    const { id } = action.payload;
    return { ...state, [id]: [] };
  case TODO_ADD_NEW:
    return addNewTodo(state, action);
  case TODO_REMOVE_NEW:
    return removeNewTodo(state, action);
  case TODO_CREATE_SUCCESS: {
    const { list_id } = action.payload;
    const { id: newId } = action.localParams;
    const ids = state[list_id];
    return {
      ...state,
      [list_id]: ids.filter(id => id !== newId)
    }
  }
  default:
    return state;
  }
}

export default newTodos;
