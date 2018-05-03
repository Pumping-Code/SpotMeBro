import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import * as actions from 'actions/userActions';
import styles, { buttonStyles, blueGrey, darkGrey, lightGreen } from '../../styles';
import TextSMB from '../../modules/TextSMB';

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

const loadingStyles = StyleSheet.create({
  smallText: {
    fontSize: 25,
    color: darkGrey,
    textAlign: 'center',
  },
});

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[Math.floor(Math.random() * (quotes.length))],
    };
  }

  componentDidMount() {
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
        <TextSMB style={loadingStyles.smallText}>{`"${this.state.quote}"`}</TextSMB>
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
            </View>
            :
            <ActivityIndicator
              animating
              color={blueGrey}
              size="large"
            />
        }
      </View>
    );
  }
}

LoadingScreen.propTypes = {
  checkForToken: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ...state.userState,
});

export default connect(mapStateToProps, { ...actions })(LoadingScreen);
