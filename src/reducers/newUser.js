const INITIAL_STATE = {
  registered: false,
  error: false,
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SIGNUP_REQUEST':
      return { ...INITIAL_STATE, loading: true };
    case 'SIGNUP_SUCCESS':
      return { ...INITIAL_STATE, registered: true };
    case 'SIGNUP_FAILURE':
      return { ...INITIAL_STATE, error: action.payload };
    default:
      return state;
  }
}
