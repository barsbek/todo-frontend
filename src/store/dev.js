import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import api from '../middlewares/api';
import DevTools from '../containers/DevTools';

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunk, api),
    DevTools.instrument()
  )
);
