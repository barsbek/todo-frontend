import {
  ENTITY_ERROR_DISMISS
} from 'redux-app/constants';

export const dismissError = (err) => ({
  type: ENTITY_ERROR_DISMISS,
  payload: err,
});
