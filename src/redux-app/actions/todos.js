import { v4 } from 'uuid';

import {
  CALL_API,

  TODO_REQUEST,
  TODO_FAILURE,
  TODO_CREATE_SUCCESS,
  TODO_UPDATE_SUCCESS,
  TODO_REMOVE_SUCCESS,
  TODO_ADD_NEW,
  TODO_REMOVE_NEW,
} from 'redux-app/constants';

const create = (params) => ({
  [CALL_API]: {
    types: [ TODO_REQUEST, TODO_CREATE_SUCCESS, TODO_FAILURE ],
    endpoint: '/todos',
    params,
  }
})

const update = (params) => ({
  [CALL_API]: {
    types: [ TODO_REQUEST, TODO_UPDATE_SUCCESS, TODO_FAILURE ],
    endpoint: `todos/${params.id}`,
    method: 'put',
    params,
  }
})

const remove = (params) => ({
  [CALL_API]: {
    types: [ TODO_REQUEST, TODO_REMOVE_SUCCESS, TODO_FAILURE ],
    endpoint: `todos/${params.id}`,
    method: 'delete',
    params,
  }
})

export const addNewTodo = (list_id) => ({
  type: TODO_ADD_NEW,
  todo: { id: v4(), list_id, isNew: true },
})

const removeNewTodo = (todo) => ({
  type: TODO_REMOVE_NEW,
  todo,
})

export const handleChange = (params) => (
  params.isNew ? create(params) : update(params)
)

export const handleRemove = (params) => (
  params.isNew ? removeNewTodo(params) : remove(params)
)
