const INITIAL_STATE = {
  data: null,
  error: false,
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SIGNUP_REQUEST':
      return { ...state, loading: true };
    case 'SIGNUP_SUCCESS':
      return { data: action.payload, error: false, loading: false };
    case 'SIGNUP_FAILURE':
      return { data: null, error: action.payload, loading: false };
    default:
      return state;
  }
}
