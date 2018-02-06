const INITIAL_STATE = { data: [], loading: false, error: false };

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
  case 'LISTS_REQUEST':
    return { ...state, loading: true }
  case 'LISTS_SUCCESS':
    return { data: action.payload, loading: false, error: false }
  case 'LISTS_FAILURE':
    return { data: [], loading: false, error: action.payload }
  
  case 'LIST_DELETE_REQUEST':
    return { ...state, loading: true }
  case 'LIST_DELETE_SUCCESS':
    const { id } = action.payload;
    const data = state.data.filter(list => list.id !== id);
    return { data, loading: false, error: false }
  case 'LIST_DELETE_FAILURE':
    return { ...state, loading: false, error: action.payload }
  default: return state;
  }
}
