import React from 'react';
import { Button, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import styles from 'styles';

function SpotMe(props) {
  return (
    <Button
      full
      onPress={props.locationSend}
      style={styles.spotMeButton}
    >
      <Text>Spot Me Bro</Text>
    </Button>
  );
}

export default SpotMe;
