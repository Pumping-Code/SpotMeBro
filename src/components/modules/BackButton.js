import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'native-base';

const BackButton = props => (
  <Button
    iconLeft
    transparent
    onPress={props.onPress}
  >
    <Icon name="arrow-back" />
  </Button>
);

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
