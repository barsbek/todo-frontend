import * as todo from './todo';

const byId = (state = {}, action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS': 
    let nextState = {...state};
    const { todos } = action.payload.entities;
    for(let id in todos) {
      nextState[id] = todos[id];
    }
    return nextState;

  case 'TODO_ADD_NEW':
    return todo.addNew(state, action);
  case 'TODO_REMOVE_NEW':
    return todo.removeNew(state, action);
  case 'TODO_CREATE_SUCCESS':
    return todo.create(state, action);
  case 'TODO_UPDATE_SUCCESS':
    return todo.update(state, action);
  case 'TODO_REMOVE_SUCCESS':
    return todo.remove(state, action);
  default:
    return state;
  }
}

export default byId;
