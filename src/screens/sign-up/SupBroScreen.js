import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlipComponent from 'react-native-flip-component';
import RNPickerSelect from 'react-native-picker-select';
import { View, Dimensions, TextInput } from 'react-native';
import { Button } from 'native-base';
import { editUserField } from 'actions/userActions';
import TextSMB from '../../components/modules/TextSMB';
import TextSMB2 from '../../components/modules/TextSMB2';
import styles, { blueGrey, buttonStyles, formStyles } from '../../styles/index';

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

const { height, width } = Dimensions.get('window');

class SupBroScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.flip = this.flip.bind(this);
  }

  flip() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    return (
      <View style={[styles.container, styles.justifyCenter, { padding: 20 }]}>
        <View>
          <TextSMB style={{ fontSize: 80, color: blueGrey, textAlign: 'center' }}>SUP, BRO</TextSMB>
          <TextSMB2 style={{ fontSize: 25, color: blueGrey, textAlign: 'center' }}>Tell us about yourself.</TextSMB2>
        </View>
        <FlipComponent
          isFlipped={this.state.isFlipped}
          containerStyles={{ marginTop: 30 }}
          backStyles={{ width: width - 40 }}
          frontView={
            <View>
              <TextSMB style={{ fontSize: 25 }}>Height:</TextSMB>
              <RNPickerSelect
                placeholder={{}}
                items={feetOptions}
                value={this.props.signUp.heightFeet}
                onSelect={value => this.props.editUserField('heightFeet', value.value)}
                style={{
                  inputIOS: formStyles.textInput,
                  icon: { top: 22, right: 16 },
                }}
              />
              <RNPickerSelect
                placeholder={{}}
                items={inchOptions}
                value={this.props.signUp.heightInches}
                onSelect={value => this.props.editUserField('heightInches', value.value)}
                style={{
                  inputIOS: formStyles.textInput,
                  icon: { top: 22, right: 16 },
                }}
              />
              <TextSMB style={{ fontSize: 25 }}>Weight:</TextSMB>
              <TextInput
                style={formStyles.textInput}
                returnKeyType="done"
                keyboardType="numeric"
                onChangeText={text => this.props.editUserField('weight', text)}
              />
              <Button
                style={buttonStyles.primary}
                full
                onPress={this.flip}
              >
                <TextSMB style={[buttonStyles.primaryText]}>Next</TextSMB>
              </Button>
            </View>
          }
          backView={
            <View>
              <TextSMB style={{ fontSize: 25 }}>Bench</TextSMB>
              <TextInput
                style={formStyles.textInput}
                returnKeyType="done"
                keyboardType="numeric"
                onChangeText={text => this.props.editUserField('maxBench', text)}
              />

              <TextSMB style={{ fontSize: 25 }}>Squat</TextSMB>
              <TextInput
                style={formStyles.textInput}
                returnKeyType="done"
                keyboardType="numeric"
                onChangeText={text => this.props.editUserField('maxSquat', text)}
              />

              <Button
                disabled={!this.state.isFlipped}
                style={buttonStyles.secondary}
                full
                onPress={this.flip}
              >
                <TextSMB style={[buttonStyles.primaryText]}>Back</TextSMB>
              </Button>
              <Button
                disabled={!this.state.isFlipped}
                style={buttonStyles.primary}
                full
                onPress={() => this.props.navigation.navigate('HowBro')}
              >
                <TextSMB style={[buttonStyles.primaryText]}>Next</TextSMB>
              </Button>
            </View>
          }
        />
      </View>
    );
  }
}

SupBroScreen.navigationOptions = {
  header: null,
};

SupBroScreen.propTypes = {
  signUp: PropTypes.shape({
    heightFeet: PropTypes.string,
    heightInches: PropTypes.string,
    maxBench: PropTypes.string,
    maxSquat: PropTypes.string,
  }).isRequired,
  editUserField: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ ...state.userState });

export default connect(mapStateToProps, { editUserField })(SupBroScreen);
