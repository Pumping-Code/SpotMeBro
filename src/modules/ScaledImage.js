import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

export default class ScaledImage extends Component {
  constructor(props) {
    super(props);
    this.state = { source: { uri: this.props.uri } };
  }

  componentDidMount() {
    Image.getSize(this.props.uri, (width, height) => {
      if (this.props.width && !this.props.height) {
        this.setState({ width: this.props.width, height: height * (this.props.width / width) });
      } else if (!this.props.width && this.props.height) {
        this.setState({ width: width * (this.props.height / height), height: this.props.height });
      } else {
        this.setState({ width, height });
      }
    });
  }

  render() {
    return (
      <Image
        source={this.state.source}
        style={[this.props.style, { height: this.state.height, width: this.state.width }]}
      />
    );
  }
}

ScaledImage.propTypes = {
  uri: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};
