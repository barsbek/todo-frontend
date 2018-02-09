import { CALL_API } from '../middlewares/api';

const SIGN_IN_TYPES = [ 'SIGN_IN_REQUEST', 'SIGN_IN_SUCCESS', 'SIGN_IN_FAILURE' ];
const SIGN_UP_TYPES = [ 'SIGN_UP_REQUEST', 'SIGN_UP_SUCCESS', 'SIGN_UP_FAILURE' ];

export const signIn = params => ({
  [CALL_API]: {
    types: SIGN_IN_TYPES,
    endpoint: '/users/authenticate',
    params
  }
})

export const signUp = params => ({
  [CALL_API]: {
    types: SIGN_UP_TYPES,
    endpoint: '/users/register',
    params
  }
})

export const signOut = () => ({
  type: 'USER_SIGN_OUT'
})
