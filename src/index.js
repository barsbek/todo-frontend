import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import api from './middlewares/api';

import Root from './components/Root';
import DevTools from './containers/DevTools';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, api),
    DevTools.instrument()
  )
);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
registerServiceWorker();
