import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class InputWithDelay extends Component {
  constructor(props) {
    super(props);
    this.delay = props.delay || 600;
    this.state = { value: props.value || "" };
  }

  static propTypes = {
    delay: PropTypes.number,
    value: PropTypes.string,
    onChangeStop: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.timer = null;
  }

  handleChange = e => {
    clearTimeout(this.timer);
    const { value } = e.target;
    this.setState({ value });
    this.timer = setTimeout(
      () => this.props.onChangeStop(this.state.value),
      this.delay
    );
  }

  render() {
    const { delay, onChangeStop, value, ...rest } = this.props;
    return (
      <input
        {...rest}
        value={this.state.value}
        onChange={this.handleChange}
      /> 
    );
  }
}
