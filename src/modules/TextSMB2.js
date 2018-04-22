import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { textColor } from '../../styles/index';

class TextSMB2 extends Component {
  constructor(props) {
    super(props);
    this.style = [{ color: textColor, fontFamily: 'open-sans-regular' }];
    if (props.style) {
      if (Array.isArray(props.style)) {
        this.style = this.style.concat(props.style);
      } else {
        this.style.push(props.style);
      }
    }
  }

  render() {
    return (
      <Text {...this.props} style={this.style}>
        {this.props.children}
      </Text>
    );
  }
}

TextSMB2.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
};

TextSMB2.defaultProps = {
  style: null,
};

export default TextSMB2;
