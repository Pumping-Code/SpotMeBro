import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { editUserField } from 'actions/userActions';
import styles, { blueGrey, buttonStyles } from '../../styles/index';

const feetOptions = [
  { key: 0, label: 'Feet', value: '' },
  { key: 1, label: '1', value: '1' },
  { key: 2, label: '2', value: '2' },
  { key: 3, label: '3', value: '3' },
  { key: 4, label: '4', value: '4' },
  { key: 5, label: '5', value: '5' },
  { key: 6, label: '6', value: '6' },
  { key: 7, label: '7', value: '7' },
];

const inchOptions = [
  { key: 0, label: 'Inches', value: '' },
  { key: 1, label: '1', value: '1' },
  { key: 2, label: '2', value: '2' },
  { key: 3, label: '3', value: '3' },
  { key: 4, label: '4', value: '4' },
  { key: 5, label: '5', value: '5' },
  { key: 6, label: '6', value: '6' },
  { key: 7, label: '7', value: '7' },
  { key: 8, label: '8', value: '8' },
  { key: 9, label: '9', value: '9' },
  { key: 10, label: '10', value: '10' },
  { key: 11, label: '11', value: '11' },
];

function SupBroScreen(props) {
  console.log('~~~~~~props', props);
  return (
    <View style={[styles.container, styles.justifyCenter, { padding: 20 }]}>
      <View>
        <Text style={{ fontFamily: 'anton-regular' }}>Sup, Bro. Tell us about yourself.</Text>
      </View>
      <View>
        <Text>What is your height and weight?</Text>
        <View style={{ flexDirection: 'row' }}>
          <RNPickerSelect
            placeholder="Feet"
            items={feetOptions}
            value={props.signUp.heightFeet}
            onSelect={value => props.editUserField('heightFeet', value)}
          />
          <RNPickerSelect
            placeholder="Inches"
            items={feetOptions}
            value={props.signUp.heightInches}
            onSelect={value => props.editUserField('heightInches', value)}
          />
        </View>
        <Button
          style={buttonStyles.primary}
          full
          onPress={() => props.navigation.navigate('HowBro')}
        >
          <Text style={[buttonStyles.primaryText]}>Next</Text>
        </Button>
      </View>
    </View>
  );
}

SupBroScreen.navigationOptions = {
  header: null,
};

SupBroScreen.propTypes = {
  user: PropTypes.shape({
    heightFeet: PropTypes.string,
    heightInches: PropTypes.string,
  }).isRequired,
  editUserField: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ ...state.userState });

export default connect(mapStateToProps, { editUserField })(SupBroScreen);
