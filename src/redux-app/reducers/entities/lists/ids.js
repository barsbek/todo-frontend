import {
  LISTS_GET_SUCCESS,
  LIST_CREATE_SUCCESS,
  LIST_REMOVE_SUCCESS,
  LIST_ADD_NEW,
  LIST_REMOVE_NEW
} from 'redux-app/constants';

const ids = (state = [], action) => {
  switch(action.type) {
  case LISTS_GET_SUCCESS:
    const { result } = action.payload;
    const withoutDuplications = result.filter(r => state.indexOf(r) < 0);
    return state.concat(withoutDuplications);
  case LIST_CREATE_SUCCESS:
    const newId = action.payload.id;
    return state.map(id => id === 'new' ? newId : id);
  case LIST_REMOVE_SUCCESS:
    return state.filter(id => id !== action.payload.id);
  case LIST_ADD_NEW:
    return [...state, 'new'];
  case LIST_REMOVE_NEW:
    return state.filter(t => t !== 'new');
  default:
    return state;
  }
}

export default ids;
