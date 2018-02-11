import { addNewTodo, removeNewTodo } from './list';

const newTodos = (state = {}, action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS': {
    const { lists } = action.payload.entities;
    let newState = {...state};
    for(let list_id in lists) {
      newState[list_id] = [];
    }
    return newState;
  }
  case 'TODO_ADD_NEW':
    return addNewTodo(state, action);
  case 'TODO_REMOVE_NEW':
    return removeNewTodo(state, action);
  case 'TODO_CREATE_SUCCESS': {
    const { list_id } = action.payload;
    let newState = {...state};
    newState[list_id].pop();
    return newState;
  }
  default:
    return state;
  }
}

export default newTodos;
