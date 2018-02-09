import axios from 'axios';
import { normalize } from 'normalizr';
import { signOut } from '../actions';

export const CALL_API = 'CALL_API';

export default store => next => action => {
  const apiAction = action[CALL_API];
  if(typeof apiAction === 'undefined') {
    return next(action);
  }

  const { endpoint, types, schema } = apiAction;
  if(typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if(!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected 3 action types');
  }

  if(!types.every(type => typeof type === 'string')) {
    throw new Error('Action type should be string');
  }

  if(schema && !(typeof schema === 'object')) {
    throw new Error('Expected schema to be an object');
  }

  const [ requestType, successType, failureType ] = types;
  
  let headers = {};

  const { user } = store.getState();
  if(user.data && user.data.token) {
    headers['Authorization'] = `Bearer ${user.data.token}`;
  }

  next({ type: requestType });

  axios({
    url: endpoint,
    baseURL: '/api/v1',
    method: apiAction.method || 'post',
    data: apiAction.params,
    headers
  })
  .then(res => {
    const payload = schema ? normalize(res.data, schema) : res.data;
    next({ type: successType, payload });
  }, error => {
    const { response } = error;
    let payload = 'Something went wrong. Try again later';
    if(!response) return next({ type: failureType, payload });

    if(response.status === 401) return next(signOut())

    const { data } = response;
    if(data) {
      if(data.message) payload = data.message;
      else if(typeof data === 'object') payload = data;
    }
    return next({ type: failureType, payload });
  })
}

