import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import Message from './components/Message';

const Notifications = ({ notifications, onDismiss }) => (
  <div styleName="notifications">
    {notifications.map((n, index) => 
      <Message
        key={n.id}
        message={n}
        timeout={1000+(index+1)*1000}
        onDismiss={onDismiss}
      />
    )}
  </div>
)

export default CSSModules(Notifications, styles);
