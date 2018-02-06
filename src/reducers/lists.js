const INITIAL_STATE = { data: [], loading: false, error: false };

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
  case 'LISTS_REQUEST':
    return { ...state, loading: true }
  case 'LISTS_SUCCESS':
    return { data: action.payload, loading: false, error: false }
  case 'LISTS_FAILURE':
    return { data: [], loading: false, error: action.payload }
  default: return state;
  }
}
