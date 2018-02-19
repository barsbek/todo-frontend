import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import api from './middlewares/api';
import DevTools from '../components/DevTools';

const configureStore = () => {
  const middlewares = [thunk, api];
  let storeCompose;
  if( process.env.NODE_ENV === 'production') {
    storeCompose = compose(
      applyMiddleware(...middlewares),
    )
  } else {
    storeCompose = compose(
      applyMiddleware(...middlewares),
      DevTools.instrument()
    )
  }

  return createStore(reducers, storeCompose );
}

export default configureStore;
