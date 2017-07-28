import React, { Component, PropTypes } from 'react';
import { Platform, Text } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { Container, Content, Footer, FooterTab, Button } from 'native-base';
import LoadingModal from 'components/modules/LoadingModal';
import SpotMe from 'components/home/SpotMe';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      errorMessage: null,
    };
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this.getLocationAsync();
    }
  }

  async getLocationAsync() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    await Location.watchPositionAsync({
      distanceInterval: 1,
    }, (location) => {
      this.setState({ location });
      this.props.locationGet({ location });
    });
  }

  render() {
    const props = this.props;
    const { navigate } = props.navigation;

    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      <Container>
        <Content>
          <LoadingModal
            fetching={props.locationState.loading}
            animationType={'slide'}
            opacity={1}
            flavorText={'Search for Bros near you...'}
          />
          <Text>{text}</Text>
          <SpotMe />
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={() => navigate('Profile')}>
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Home;
