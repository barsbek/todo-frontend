import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import configureStore from './redux-app/configureStore';
import registerServiceWorker from './registerServiceWorker';

import "./styles/fonts.css";
import "./styles/index.css";

ReactDOM.render(
  <Root store={configureStore()} />,
  document.getElementById('root')
);
registerServiceWorker();
