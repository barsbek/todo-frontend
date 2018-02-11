import { v4 } from 'uuid';

import { CALL_API } from '../middlewares/api';

const TODO_CREATE_TYPES = ['TODO_REQUEST', 'TODO_CREATE_SUCCESS', 'TODO_FAILURE'];
const TODO_UPDATE_TYPES = ['TODO_REQUEST', 'TODO_UPDATE_SUCCESS', 'TODO_FAILURE'];
const TODO_REMOVE_TYPES = ['TODO_REQUEST', 'TODO_REMOVE_SUCCESS', 'TODO_FAILURE'];

const createTodo = (params) => ({
  [CALL_API]: {
    types: TODO_CREATE_TYPES,
    endpoint: '/todos',
    params,
  }
})

const updateTodo = (id, params) => ({
  [CALL_API]: {
    types: TODO_UPDATE_TYPES,
    endpoint: `todos/${id}`,
    method: 'put',
    params,
  }
})

const removeTodo = (id) => ({
  [CALL_API]: {
    types: TODO_REMOVE_TYPES,
    endpoint: `todos/${id}`,
    method: 'delete',
  }
})

export const addNewTodo = (list_id) => ({
  type: 'TODO_ADD_NEW',
  payload: { id: v4(), list_id, isNew: true },
})

const removeNewTodo = (todo) => ({
  type: 'TODO_REMOVE_NEW',
  payload: todo,
})

export const handleChange = (todo) => {
  const { isNew, id, ...params } = todo;
  return isNew ? createTodo(params) : updateTodo(id, params);
}

export const handleRemove = (todo) => (
  todo.isNew ? removeNewTodo(todo) : removeTodo(todo.id)
)
