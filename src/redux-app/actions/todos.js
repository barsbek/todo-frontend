import { v4 } from 'uuid';

import { CALL_API } from 'redux-app/constants';
import {
  TODO_REQUEST,
  TODO_FAILURE,
  TODO_CREATE_SUCCESS,
  TODO_UPDATE_SUCCESS,
  TODO_REMOVE_SUCCESS,
  TODO_ADD_NEW,
  TODO_REMOVE_NEW,
} from 'redux-app/constants';

const createTodo = (params) => ({
  [CALL_API]: {
    types: [ TODO_REQUEST, TODO_CREATE_SUCCESS, TODO_FAILURE ],
    endpoint: '/todos',
    params,
  }
})

const updateTodo = (id, params) => ({
  [CALL_API]: {
    types: [ TODO_REQUEST, TODO_UPDATE_SUCCESS, TODO_FAILURE ],
    endpoint: `todos/${id}`,
    method: 'put',
    params,
  }
})

const removeTodo = (id) => ({
  [CALL_API]: {
    types: [ TODO_REQUEST, TODO_REMOVE_SUCCESS, TODO_FAILURE ],
    endpoint: `todos/${id}`,
    method: 'delete',
  }
})

export const addNewTodo = (list_id) => ({
  type: TODO_ADD_NEW,
  payload: { id: v4(), list_id, isNew: true },
})

const removeNewTodo = (todo) => ({
  type: TODO_REMOVE_NEW,
  payload: todo,
})

export const handleChange = (todo) => {
  const { isNew, id } = todo;
  return isNew ? createTodo(todo) : updateTodo(id, todo);
}

export const handleRemove = (todo) => (
  todo.isNew ? removeNewTodo(todo) : removeTodo(todo.id)
)
