import { CALL_API } from '../middlewares/api';

const LISTS_TYPES = ['LISTS_REQUEST', 'LISTS_SUCCESS', 'LISTS_FAILURE'];
const LIST_DELETE_TYPES = ['LIST_DELETE_REQUEST', 'LIST_DELETE_SUCCESS', 'LIST_DELETE_FAILURE'];

export const getLists = () => ({
  [CALL_API]: {
    types: LISTS_TYPES,
    method: 'get',
    endpoint: '/lists'
  }
})

export const deleteList = id => ({
  [CALL_API]: {
    types: LIST_DELETE_TYPES,
    method: 'delete',
    endpoint: `/lists/${id}`
  }
})
