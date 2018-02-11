import { CALL_API } from '../middlewares/api';
import * as schemas from './schemas';

const LIST_CREATE_TYPES = ['LIST_REQUEST', 'LIST_CREATE_SUCCESS', 'LIST_FAILURE'];
const LIST_UPDATE_TYPES = ['LIST_REQUEST', 'LIST_UPDATE_SUCCESS', 'LIST_FAILURE'];
const LIST_REMOVE_TYPES = ['LIST_REQUEST', 'LIST_REMOVE_SUCCESS', 'LIST_FAILURE'];

export const create = params => ({
  [CALL_API]: {
    types: LIST_CREATE_TYPES,
    endpoint: `/lists`,
    params
  }
})

export const update = (id, params) => ({
  [CALL_API]: {
    types: LIST_UPDATE_TYPES,
    method: 'put',
    endpoint: `/lists/${id}`,
    params,
    schema: schemas.list,
  }
})

export const remove = id => ({
  [CALL_API]: {
    types: LIST_REMOVE_TYPES,
    method: 'delete',
    endpoint: `/lists/${id}`
  }
})

export const removeNew = () => ({
  type: 'REMOVE_NEW_LIST'
})

export const addNew = () => ({
  type: 'ADD_NEW_LIST'
})
