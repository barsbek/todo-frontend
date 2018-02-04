import React from 'react';
import { Provider } from 'react-redux';

import DevTools from '../containers/DevTools';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>
)

export default Root;
