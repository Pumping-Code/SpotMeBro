import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import * as actions from 'actions/userActions';
import {
  checkLocationPermission,
  askUserLocationPermission,
  setUserLocation,
} from 'actions/locationActions';
import TextSMB from '../components/modules/TextSMB';
import styles, { buttonStyles, blueGrey, darkGrey, lightGreen, grey, offWhite, offset } from 'styles/index';

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
  bigText: {
    fontSize: 40,
    color: blueGrey,
    textAlign: 'center',
  },
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
    // this.props.checkLocationPermission();
  }

  render() {
    let content;

    if (!this.props.loading && !Object.keys(this.props.user).length) {
      content = (
        <View>
          <Button
            style={buttonStyles.primary}
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
        </View>
      );
    }

    return (
      <View
        style={[
          styles.container,
          styles.justifyCenter,
          { padding: 20 },
        ]}
      >
        <View style={{ height: height - offset }}>
          <TextSMB style={splashStyles.bigText}>Spot Me Bro</TextSMB>
          <TextSMB style={splashStyles.smallText}>{`"${this.state.quote}"`}</TextSMB>
        </View>
        {content}
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

export default connect(
  mapStateToProps,
  {
    ...actions,
    setUserLocation,
    checkLocationPermission,
    askUserLocationPermission,
  },
)(SplashScreen);
