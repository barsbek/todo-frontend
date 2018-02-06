import axios from 'axios';

export const CALL_API = 'CALL_API';

export default store => next => action => {
  const apiAction = action[CALL_API];
  if(typeof apiAction === 'undefined') {
    return next(action);
  }

  const { endpoint, types } = apiAction;
  if(typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if(!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected 3 action types');
  }

  if(!types.every(type => typeof type === 'string')) {
    throw new Error('Action type should be string');
  }

  const [ requestType, successType, failureType ] = types;
  
  let headers = {};

  const { user } = store.getState();
  if(user && user.data) {
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
    next({ type: successType, payload: res.data })
  })
  .catch(err => {
    let payload = 'Something went wrong. Try again later';

    const { data } = err.response;
    if(data && typeof data === 'object') {
      if(data.message) payload = data.message;
      else payload = data;
    }
    next({ type: failureType, payload });
  })
}

