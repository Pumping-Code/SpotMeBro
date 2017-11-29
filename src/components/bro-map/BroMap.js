import React from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import styles from 'styles';

function BroMap(props) {
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

export default BroMap;
