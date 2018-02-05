const INITIAL_STATE = {
  data: null,
  token: localStorage.getItem('token'),
  error: false,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SIGNIN_REQUEST':  
      return {...state, loading: true };
    case 'SIGNIN_SUCCESS':
      const { token } = action.payload;
      localStorage.setItem('token', token);
      return { data: action.payload, token, error: false, loading: false }
    case 'SIGNIN_FAILURE':
      let error = false;
      if(typeof action.payload === 'string'){
        error = action.payload;
      }
      return { data: null, token: null, error , loading: false }
    default:
      return state;
  }
}
