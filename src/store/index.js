import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import api from '../middlewares/api';
import DevTools from '../containers/DevTools';

const middlewares = [thunk, api];
let storeCompose;
if( process.env.NODE_ENV === 'production') {
  storeCompose = compose(
    applyMiddleware(thunk, api),
  )
} else {
  storeCompose = compose(
    applyMiddleware(thunk, api),
    DevTools.instrument()
  )
}

export default createStore(
  reducers,
  storeCompose,
);
