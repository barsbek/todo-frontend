import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import api from '../middlewares/api';

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunk, api),
  )
);
