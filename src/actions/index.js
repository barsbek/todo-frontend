import { CALL_API } from '../middlewares/api';

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,

  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,

  USER_SIGN_OUT,
} from '../constants';

export const signIn = params => ({
  [CALL_API]: {
    types: [ SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE ],
    endpoint: '/users/authenticate',
    params
  }
})

export const signUp = params => ({
  [CALL_API]: {
    types: [ SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE ],
    endpoint: '/users/register',
    params
  }
})

export const signOut = () => ({
  type: USER_SIGN_OUT
})
