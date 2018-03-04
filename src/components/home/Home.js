import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, View, Dimensions } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { Button, Text } from 'native-base';
import { LoadingModal } from 'components/modules';
import styles, { offset } from 'styles';
import SpotMe from 'components/home/SpotMe';

const { height, width } = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      errorMessage: null,
      isFlipped: false,
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
    const { props } = this;
    const { navigate } = this.props.navigation;

    let location = <Text>'Waiting...'</Text>;
    if (this.state.errorMessage) {
      location = (
        <View style={{ paddingTop: 10 }}>
          <Text>{this.state.errorMessage}</Text>
        </View>
      );
    } else if (this.state.location) {
      location = (
        <View style={{ paddingTop: 10 }}>
          <Text>Time: {this.state.location.timestamp}</Text>
          <Text>Speed: {this.state.location.coords.speed}</Text>
          <Text>Latitude: {this.state.location.coords.latitude}</Text>
          <Text>Longitude: {this.state.location.coords.longitude}</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={{ height: height - offset }}>

          <View style={{ flex: 1, backgroundColor: '#d7d7d7' }}>
            <Button
              full
              onPress={props.locationSend}
              style={styles.spotMeButton}
            >
              <Text>Spot Me Bro</Text>
            </Button>
          </View>

          {location}
          <Button onPress={() => this.setState({ isFlipped: !this.state.isFlipped })}>
            <Text style={{ fontFamily: 'anton-regular' }}>Flip</Text>
          </Button>

          <LoadingModal
            fetching={props.locationState.loading}
            animationType="slide"
            opacity={1}
            flavorText="Searching for Bros near you..."
          />
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Home;
