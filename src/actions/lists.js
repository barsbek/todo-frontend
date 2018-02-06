import { CALL_API } from '../middlewares/api';

const LISTS_TYPES = ['LISTS_REQUEST', 'LISTS_SUCCESS', 'LISTS_FAILURE'];
const LIST_DELETE_TYPES = ['LIST_DELETE_REQUEST', 'LIST_DELETE_SUCCESS', 'LIST_DELETE_FAILURE'];
const LIST_CREATE_TYPES = ['LIST_CREATE_REQUEST', 'LIST_CREATE_SUCCESS', 'LIST_CREATE_FAILURE'];
const LIST_UPDATE_TYPES = ['LIST_UPDATE_REQUEST', 'LIST_UPDATE_SUCCESS', 'LIST_UPDATE_FAILURE'];

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

export const createList = params => ({
  [CALL_API]: {
    types: LIST_CREATE_TYPES,
    endpoint: `/lists`,
    params
  }
})

export const updateList = (id, params) => ({
  [CALL_API]: {
    types: LIST_UPDATE_TYPES,
    method: 'put',
    endpoint: `/lists/${id}`,
    params
  }
})

export const addNewList = () => ({
  type: 'ADD_NEW_LIST'
})

export const deleteNewList = () => ({
  type: 'DELETE_NEW_LIST'
})
