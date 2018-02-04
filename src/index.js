import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import api from './middlewares/api';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducers,
  applyMiddleware(thunk, api)
);

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
