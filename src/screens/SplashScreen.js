import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from 'actions/userActions';
import styles, { blueGrey, darkGrey, lightGreen, grey, offWhite, offset } from 'styles/index';

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

const splashStyle = StyleSheet.create({
  bg: {
    backgroundColor: blueGrey,
    padding: 20,
  },
  bigText: {
    fontSize: 40,
    color: lightGreen,
    fontFamily: 'anton-regular',
  },
});

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[Math.floor(Math.random() * (quotes.length))],
    };
  }

  componentDidMount() {
    // AsyncStorage.removeItem('fb_token');
    // Give the user some time to read the quote before performing
    // async task of checking for their access token.
    // setTimeout(this.props.checkForToken, 1000);
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          styles.justifyCenter,
          splashStyle.bg,
        ]}
      >
        <View style={{ height: height - offset }}>
          <Text style={{ fontSize: 40, color: lightGreen, fontFamily: 'anton-regular' }}>Spot Me Bro</Text>
          <Text style={{ fontSize: 25, color: lightGreen }}>{`"${this.state.quote}"`}</Text>
        </View>
      </View>
    );
  }
}

SplashScreen.propTypes = {
  checkForToken: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state.userReducer,
});

export default connect(mapStateToProps, actions)(SplashScreen);
