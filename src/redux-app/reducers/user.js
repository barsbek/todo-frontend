import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  USER_SIGN_OUT,
} from 'redux-app/constants';

const INITIAL_STATE = {
  data: JSON.parse(localStorage.getItem('user')),
  error: false,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN_REQUEST:  
      return { ...state, loading: true };
    case SIGN_IN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.response));
      return { data: action.response, error: false, loading: false }
    case SIGN_IN_FAILURE:
      let error = false;
      if(typeof action.response === 'string'){
        error = action.response;
      }
      return { data: null, error , loading: false }
    case USER_SIGN_OUT:
      localStorage.removeItem('user');
      return { data: null, error: false, loading: false }
    default:
      return state;
  }
}
