import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import { editUserField } from 'actions/userActions';
import TextSMB from '../../components/modules/TextSMB';
import TextSMB2 from '../../components/modules/TextSMB2';
import styles, { blueGrey, buttonStyles, formStyles } from '../../styles/index';

const broOptions = [
  { key: 0, label: '1', value: '1' },
  { key: 1, label: '2', value: '2' },
  { key: 2, label: '3', value: '3' },
  { key: 3, label: '4', value: '4' },
  { key: 4, label: '5', value: '5' },
  { key: 5, label: '6', value: '6' },
  { key: 6, label: '7', value: '7' },
  { key: 7, label: '8', value: '8' },
  { key: 8, label: '9', value: '9' },
  { key: 9, label: 'Rob Gronkowski', value: '10' },
];

function HowBroScreen(props) {
  return (
    <View style={[styles.container, styles.justifyCenter, { padding: 20 }]}>
      <TextSMB2 style={{ fontSize: 25 }}>On a scale of 1 to Gronk, how Bro are you?</TextSMB2>
      <RNPickerSelect
        items={broOptions}
        placeholder={{}}
        value={props.signUp.howBro}
        onSelect={value => props.editUserField('howBro', value.value)}
        style={{
          inputIOS: formStyles.textInput,
          icon: { top: 22, right: 16 },
        }}
      />
      <Button
        style={buttonStyles.primary}
        full
        onPress={() => props.navigation.navigate('App')}
      >
        <TextSMB style={[buttonStyles.primaryText]}>Finish</TextSMB>
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
