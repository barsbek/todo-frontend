import axios from 'axios';

export const CALL_API = 'CALL_API';

export default store => next => action => {
  const apiAction = action[CALL_API];
  if(typeof apiAction === undefined) {
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

  next({ type: requestType });

  axios({
    url: endpoint,
    baseURL: '/api/v1',
    method: apiAction.method || 'post',
    data: apiAction.params,
  })
  .then(res => {
    next({ type: successType, payload: res.data })
  })
  .catch(err => {
    const { response } = err;
    let message = 'Something went wrong. Try again later';
    if(response.data && response.data.message) {
      message = response.data.message;
    }
    next({ type: failureType, payload: message });
  })
}

