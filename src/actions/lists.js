import { CALL_API } from '../middlewares/api';

const LISTS_TYPES = ['LISTS_REQUEST', 'LISTS_SUCCESS', 'LISTS_FAILURE'];

export const getLists = () => ({
  [CALL_API]: {
    types: LISTS_TYPES,
    method: 'get',
    endpoint: '/lists'
  }
})
