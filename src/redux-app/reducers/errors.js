import {
  TODO_FAILURE,
  LIST_FAILURE,
  ENTITY_ERROR_DISMISS,
} from 'redux-app/constants';

import { v4 } from 'uuid';

export const errors = (state = [], action) => {
  switch(action.type) {
    case TODO_FAILURE:
    case LIST_FAILURE:
      return [ 
        ...state,
        { id: v4(), text: action.response }
      ];
    case ENTITY_ERROR_DISMISS:
      const { id } = action.payload;
      return state.filter(e => e.id !== id);
    default:
      return state;
  }
}

export default errors;
