import * as schemas from './schemas';
import * as list from './list';
import {
  CALL_API,

  LISTS_GET_REQUEST,
  LISTS_GET_SUCCESS,
  LISTS_GET_FAILURE,
} from 'redux-app/constants';

export const fetchLists = () => ({
  [CALL_API]: {
    types: [ LISTS_GET_REQUEST, LISTS_GET_SUCCESS, LISTS_GET_FAILURE ],
    method: 'get',
    endpoint: '/lists',
    schema: schemas.lists,
  }
})

const isNew = (id) => (id === 'new');

export const handleChange = (params) => (
  isNew(params.id) ? list.create(params) : list.update(params)
)

export const handleRemove = (params) => (
  isNew(params.id) ? list.removeNew() : list.remove(params)
)
