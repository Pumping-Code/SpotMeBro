import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import * as actions from 'actions/userActions';
import styles, { buttonStyles, blueGrey, darkGrey, lightGreen, offset } from 'styles/index';
import TextSMB from '../components/modules/TextSMB';

const { height } = Dimensions.get('window');
const quotes = [
  'The worst thing I can be is the same as everybody else. I hate that.',
  'Milk is for babies. When you grow up you have to drink beer.',
  'Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.',
  'It\'s simple, if it jiggles, it\'s fat.',
  'Get to the choppa!',
  'Hasta la vista, baby.',
  'Just remember, you can\'t climb the ladder of success with your hands in your pockets.',
  'I\'ll be back.',
];

const splashStyles = StyleSheet.create({
  smallText: {
    fontSize: 25,
    color: darkGrey,
    textAlign: 'center',
  },
});

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[Math.floor(Math.random() * (quotes.length))],
    };
  }

  componentWillMount() {
    // AsyncStorage.removeItem('fb_token');
    // async task of checking for their access token
    // and location permission
    this.props.checkForToken();
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          styles.justifyCenter,
          { padding: 20 },
        ]}
      >
        <View style={{ height: height - offset }}>
          <TextSMB style={{ textAlign: 'center', fontSize: 35, color: darkGrey }}>
            SPOT ME
          </TextSMB>
          <View
            style={{
            alignSelf: 'center',
            height: 5,
            width: 112,
            backgroundColor: lightGreen,
          }}
          />
          <TextSMB style={{ textAlign: 'center', fontSize: 81, color: blueGrey }}>
            BRO
          </TextSMB>
          <TextSMB style={splashStyles.smallText}>{`"${this.state.quote}"`}</TextSMB>
        </View>
        {
          !this.props.loading && !Object.keys(this.props.user).length ?
            <View>
              <Button
                style={[buttonStyles.primary, { marginVertical: 10 }]}
                full
                onPress={this.props.facebookLogin}
              >
                <TextSMB style={buttonStyles.primaryText}>Login</TextSMB>
              </Button>
              <Button
                style={buttonStyles.secondary}
                full
                onPress={this.props.facebookLogin}
              >
                <TextSMB style={buttonStyles.secondaryText}>Sign up with Facebook</TextSMB>
              </Button>
            </View> : null
        }
      </View>
    );
  }
}

SplashScreen.propTypes = {
  checkForToken: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ...state.userState,
});

export default connect(mapStateToProps, { ...actions })(SplashScreen);
