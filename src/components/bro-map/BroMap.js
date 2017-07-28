import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';
import LoadingModal from '../modules/LoadingModal';

class BroMap extends Component {
  componentDidMount() {
    console.log('mapview props: ', this.props);
    // this.props.getUsers();
  }

  render() {
    const props = this.props;
    // <Text>
    // {props.userReducer.users[0].location.lat}, {props.userReducer.users[0].location.lng}
    // </Text>
    // {
    //   props.userReducer.users.map(user => (
    //     <MapView.Marker
    //     coordinate={{ latitude: user.location.lat, longitude: user.location.lng }}
    //     />
    //   ))
    // }

    return (
      <View>
        <LoadingModal fetching={props.locationState.loading} />
        <View>
          <MapView
            style={{ height: 300, width: 200 }}
            initialRegion={{
              latitude: props.location.coords.latitude,
              longitude: props.location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>

      </View>
    );
  }
}

export default BroMap;
