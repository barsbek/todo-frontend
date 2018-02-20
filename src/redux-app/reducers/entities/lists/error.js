import {
  LISTS_GET_FAILURE,
} from 'redux-app/constants';

const error = (state = false, action) => {
  switch(action.type) {
  case LISTS_GET_FAILURE:
    return action.response;
  default:
    return state;
  }
}

export default error;
