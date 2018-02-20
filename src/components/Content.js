import React from 'react';

import Header from './Header';
import Lists from './Lists';
import Errors from './Errors';

const Content = () => [
  <Header key='header'/>,
  <Lists key="lists" />,
  <Errors key='errors' />
]

export default Content;
