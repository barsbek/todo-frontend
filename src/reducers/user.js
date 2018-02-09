const INITIAL_STATE = {
  data: JSON.parse(localStorage.getItem('user')),
  error: false,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SIGN_IN_REQUEST':  
      return {...state, loading: true };
    case 'SIGN_IN_SUCCESS':
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { data: action.payload, error: false, loading: false }
    case 'SIGN_IN_FAILURE':
      let error = false;
      if(typeof action.payload === 'string'){
        error = action.payload;
      }
      return { data: null, token: null, error , loading: false }
    case 'USER_SIGN_OUT':
      localStorage.removeItem('user');
      return { data: null, error: false, loading: false }
    default:
      return state;
  }
}
