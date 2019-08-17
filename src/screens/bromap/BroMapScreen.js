import React, { Component } from 'react';
import { View } from 'react-native';
import { Audio } from 'expo-av';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import LoadingModal from '../../modules/LoadingModal';
import * as actions from '../../actions/locationActions';
import styles from '../../styles';

class BroMapScreen extends Component {
  async componentDidMount() {
    // adding this here to test it out
    // TODO move this code to when a user accpets a request
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('../../../assets/sounds/coming-notification.m4a'));
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { props } = this;
    return (
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
              latitude: props.coords.latitude,
              longitude: props.coords.longitude,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            }}
        >
          {
              props.userLocations.map(user => (
                <MapView.Marker
                  key={user._id}
                  coordinate={{
                    latitude: user.location[1],
                    longitude: user.location[0],
                  }}
                />
              ))
            }
        </MapView>
        <LoadingModal
          fetching={props.sendingLocation}
          flavorText="Notifying nearby Bros..."
          animationType="slide"
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state.locationState,
});

export default connect(mapStateToProps, actions)(BroMapScreen);

