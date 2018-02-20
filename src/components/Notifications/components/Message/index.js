import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

class Message extends Component {

  componentDidMount() {
    setTimeout(
      this.handleDismiss,
      this.props.timeout || 2000
    );
  }

  handleDismiss = () => {
    const { onDismiss, message } = this.props;
    onDismiss(message);
  }

  render() {
    return (
      <div styleName="message">
        <div styleName="message-text">
          {this.props.message.text}
        </div>
        <button
          styleName="message-button"
          onClick={this.handleDismiss}
        >x</button>
      </div>
    );
  }
}

export default CSSModules(Message, styles);
