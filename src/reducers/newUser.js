const INITIAL_STATE = {
  registered: false,
  error: false,
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SIGN_UP_REQUEST':
      return { ...INITIAL_STATE, loading: true };
    case 'SIGN_UP_SUCCESS':
      return { ...INITIAL_STATE, registered: true };
    case 'SIGN_UP_FAILURE':
      return { ...INITIAL_STATE, error: action.payload };
    default:
      return state;
  }
}
