let hasPendings = [];

const loading = (state = false, action) => {
  switch(action.type) {
  case 'LISTS_GET_SUCCESS':
  case 'LISTS_GET_FAILURE':
  case 'LIST_UPDATE_SUCCESS':
  case 'LIST_REMOVE_SUCCESS':
  case 'LIST_FAILURE':
    hasPendings.pop();
    return hasPendings.length > 0;
  case 'LISTS_GET_REQUEST':
  case 'LIST_REQUEST':
    hasPendings.push(true);
    return hasPendings.length > 0;

  default:
    return state;
  }
}

export default loading;
