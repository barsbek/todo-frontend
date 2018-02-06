import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header';
import Lists from '../containers/Lists';

const Content = () => [
  <Header key='header'/>,
  <Lists key="lists" />,
]

export default Content;
