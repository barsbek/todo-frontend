const INITIAL_STATE = {
  data: JSON.parse(localStorage.getItem('user')),
  error: false,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SIGNIN_REQUEST':  
      return {...state, loading: true };
    case 'SIGNIN_SUCCESS':
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { data: action.payload, error: false, loading: false }
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
