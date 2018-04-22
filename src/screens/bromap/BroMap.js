import React from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import LoadingModal from '../../modules/LoadingModal';
import styles from '../../styles';

function BroMap(props) {
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

export default BroMap;
