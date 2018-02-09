import { CALL_API } from '../middlewares/api';

import * as schemas from './schemas';

const LISTS_GET_TYPES = ['LISTS_GET_REQUEST', 'LISTS_GET_SUCCESS', 'LISTS_GET_FAILURE'];
const LIST_DELETE_TYPES = ['LIST_REQUEST', 'LIST_DELETE_SUCCESS', 'LIST_FAILURE'];
const LIST_CREATE_TYPES = ['LIST_REQUEST', 'LIST_CREATE_SUCCESS', 'LIST_FAILURE'];
const LIST_UPDATE_TYPES = ['LIST_REQUEST', 'LIST_UPDATE_SUCCESS', 'LIST_FAILURE'];

export const getLists = () => ({
  [CALL_API]: {
    types: LISTS_GET_TYPES,
    method: 'get',
    endpoint: '/lists',
    schema: schemas.lists,
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
    params,
    schema: schemas.list,
  }
})

export const addNewList = () => ({
  type: 'ADD_NEW_LIST'
})

export const deleteNewList = () => ({
  type: 'DELETE_NEW_LIST'
})
