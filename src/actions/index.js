import { CALL_API } from '../middlewares/api';

const SIGNIN_TYPES = [ 'SIGNIN_REQUEST', 'SIGNIN_SUCCESS', 'SIGNIN_FAILURE' ];
const SIGNUP_TYPES = [ 'SIGNUP_REQUEST', 'SIGNUP_SUCCESS', 'SIGNUP_FAILURE' ];

export const signIn = params => ({
  [CALL_API]: {
    types: SIGNIN_TYPES,
    endpoint: '/users/authenticate',
    params
  }
})

export const signUp = params => ({
  [CALL_API]: {
    types: SIGNUP_TYPES,
    endpoint: '/users/register',
    params
  }
})

export const signOut = () => ({
  type: 'USER_SIGN_OUT'
})
