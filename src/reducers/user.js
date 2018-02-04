const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  error: false,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SIGNIN_REQUEST':  
      return {...state, loading: true };
    case 'SIGNIN_SUCCESS':
      localStorage.setItem('token', action.payload);
      return {token: action.payload, error: false, loading: false }
    case 'SIGNIN_FAILURE':
      return { token: null, error: action.payload, loading: false }
    default:
      return state;
  }
}
