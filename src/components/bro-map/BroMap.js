import React, { Component } from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import styles from 'styles/styles';

class BroMap extends Component {
  componentDidMount() {
    console.log('mapview props: ', this.props);
    // this.props.getUsers();
  }

  render() {
    const props = this.props;

    return (
      <View>
        <View>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: props.locationState.coords.latitude,
              longitude: props.locationState.coords.longitude,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            }}
          >
            {
              props.locationState.userLocations.map(user => (
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
        </View>
      </View>
    );
  }
}

export default BroMap;
