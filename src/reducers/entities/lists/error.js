const error = (state = null, action) => {
  switch(action.type) {
  case 'LISTS_GET_FAILURE':
  case 'LIST_FAILURE':
    return action.payload;
  default:
    return state;
  }
}

export default error;