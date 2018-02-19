import * as schemas from './schemas';

import {
  CALL_API,

  LIST_REQUEST,
  LIST_FAILURE,
  LIST_CREATE_SUCCESS,
  LIST_UPDATE_SUCCESS,
  LIST_REMOVE_SUCCESS,
  LIST_ADD_NEW,
  LIST_REMOVE_NEW,
} from 'redux-app/constants';

export const create = params => ({
  [CALL_API]: {
    types: [ LIST_REQUEST, LIST_CREATE_SUCCESS, LIST_FAILURE ],
    endpoint: `/lists`,
    params
  }
})

export const update = (params) => ({
  [CALL_API]: {
    types: [ LIST_REQUEST, LIST_UPDATE_SUCCESS, LIST_FAILURE ],
    method: 'put',
    endpoint: `/lists/${params.id}`,
    params,
    schema: schemas.list,
  }
})

export const remove = (params) => ({
  [CALL_API]: {
    types: [ LIST_REQUEST, LIST_REMOVE_SUCCESS, LIST_FAILURE ],
    method: 'delete',
    endpoint: `/lists/${params.id}`,
    params,
  }
})

export const addNew = () => ({
  type: LIST_ADD_NEW
})

export const removeNew = () => ({
  type: LIST_REMOVE_NEW
})
