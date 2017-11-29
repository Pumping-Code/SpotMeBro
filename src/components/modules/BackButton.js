import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'native-base';

function BackButton({ onPress }) {
  return (
    <Button
      iconLeft
      transparent
      onPress={onPress}
    >
      <Icon name="arrow-back" />
    </Button>
  );
}

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export { BackButton };
