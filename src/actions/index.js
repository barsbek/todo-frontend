import axios from 'axios';
import { CALL_API } from '../middlewares/api';

const SIGNIN_TYPES = [ 'SIGNIN_REQUEST', 'SIGNIN_SUCCESS', 'SIGNIN_FAILURE' ];

export const signIn = (email, password) => ({
  [CALL_API]: {
    types: SIGNIN_TYPES,
    endpoint: '/users/authenticate',
    params: { user: { email, password }}
  }
});
