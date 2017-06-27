import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';

class SpotMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Button>
        <Text>I Need A Spot</Text>
      </Button>
    );
  }
}

export default SpotMe;
