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
      let error = false;
      if(typeof action.payload === 'string'){
        error = action.payload;
      }
      return { token: null, error , loading: false }
    default:
      return state;
  }
}
