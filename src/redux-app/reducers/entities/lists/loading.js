import {
  LISTS_GET_REQUEST,
  LISTS_GET_SUCCESS,
  LISTS_GET_FAILURE,
} from 'redux-app/constants';

const loading = (state = false, action) => {
  switch(action.type) {
  case LISTS_GET_SUCCESS:
  case LISTS_GET_FAILURE:
    return false;
  case LISTS_GET_REQUEST:
    return true;

  default:
    return state;
  }
}

export default loading;
