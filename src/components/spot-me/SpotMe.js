import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'native-base';
import { bindActionCreators } from 'redux';

import { locationSend } from '../../actions';

class SpotMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    this.props.locationSend();
  }

  render() {
    return (
      <Button onPress={this.onButtonPress}>
        <Text>I Need A Spot</Text>
      </Button>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ locationSend }, dispatch);
}

export default connect(null, mapDispatchToProps)(SpotMe);