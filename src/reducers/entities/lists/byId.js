import * as list from './list';

export const byId = (state = {}, action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS': 
    const { lists } = action.payload.entities;
    return {...state, ...lists};
  case 'LIST_CREATE_SUCCESS':
    return list.create(state, action);
  case 'LIST_UPDATE_SUCCESS':
    return list.update(state, action);
  case 'LIST_REMOVE_SUCCESS':
    return list.destroy(state, action);
  case 'ADD_NEW_LIST':
    return list.addNew(state, action);
  case 'REMOVE_NEW_LIST':
    return list.removeNew(state, action);

  case 'TODO_CREATE_SUCCESS':
    return list.onTodoCreate(state, action);
  case 'TODO_REMOVE_SUCCESS':
    return list.onTodoRemove(state, action);
  default:
    return state;
  }
}

export default byId;
