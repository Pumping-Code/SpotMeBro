import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button, Picker } from 'native-base';
import { editUserField } from 'actions/userActions';
import styles, { blueGrey, buttonStyles, formStyles } from '../../styles/index';

function HowBroScreen(props) {
  return (
    <View style={[styles.container, styles.justifyCenter, { padding: 20 }]}>
      <Text>On a scale of 1 to Rob Gronkowski, how Bro are you?</Text>
      <Picker
        selectedValue={props.signUp.howBro}
        onValueChange={value => props.editUserField('howBro', value)}
      />
      <Button
        style={buttonStyles.primary}
        full
        onPress={() => props.navigation.navigate('App')}
      >
        <Text style={[buttonStyles.primaryText]}>Next</Text>
      </Button>
    </View>
  );
}

HowBroScreen.navigationOptions = {
  header: null,
};

HowBroScreen.propTypes = {
  user: PropTypes.shape({
    howBro: PropTypes.string,
  }).isRequired,
  editUserField: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ ...state.userState });

export default connect(mapStateToProps, { editUserField })(HowBroScreen);
