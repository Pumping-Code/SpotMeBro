import React from 'react';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'actions/locationActions';

function SpotMe(props) {
  return (
    <Button full onPress={props.locationSend}>
      <Text>I Need A Spot</Text>
    </Button>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(SpotMe);
