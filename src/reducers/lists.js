const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function(state=INITIAL_STATE, action) {
  let data;
  switch(action.type) {
  case 'LISTS_REQUEST':
    return { ...state, loading: true }
  case 'LISTS_SUCCESS':
    return { ...INITIAL_STATE, data: action.payload }
  case 'LISTS_FAILURE':
    return { ...INITIAL_STATE, error: action.payload }
  
  case 'LIST_DELETE_REQUEST':
    return { ...state, loading: true }
  case 'LIST_DELETE_SUCCESS':
    const { id } = action.payload;
    data = state.data.filter(list => list.id !== id);
    return { ...INITIAL_STATE, data }
  case 'LIST_DELETE_FAILURE':
    return { ...state, loading: false, error: action.payload }

  case 'LIST_CREATE_REQUEST':
    return { ...state, loading: true }
  case 'LIST_CREATE_SUCCESS':
    data = state.data.map(list => (
      (list.id === 'new') ? action.payload : list
    ))
    return { ...INITIAL_STATE, data }
  case 'LIST_CREATE_FAILURE':
    return { ...state, loading: false, error: action.payload }


  case 'ADD_NEW_LIST':
    return { ...state, data: [...state.data, { id: 'new' }] }
  case 'DELETE_NEW_LIST':
    data = state.data.filter(list => list.id !== 'new');
    return { ...state, data }
  default: return state;
  }
}
