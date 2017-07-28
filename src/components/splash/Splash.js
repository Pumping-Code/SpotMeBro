import React, { Component, PropTypes } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Text, Content, Container } from 'native-base';
import styles from 'styles/styles';

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

class Splash extends Component {
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
    setTimeout(this.props.checkForToken, 1000);
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.container}>
            <Text>{`"${this.state.quote}"`}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

Splash.propTypes = {
  checkForToken: PropTypes.func.isRequired,
};

export default Splash;
