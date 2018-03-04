import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, Modal } from 'react-native';
import { Button, Text } from 'native-base';
import TextSMB from 'components/modules/TextSMB';
import LoadingModal from 'components/modules/LoadingModal';
import styles, { offset } from 'styles';

const { height, width } = Dimensions.get('window');

class Home extends Component {
  componentDidMount() {
    this.props.checkLocationPermission();
  }

  render() {
    const { props } = this;

    const location = (
      <View style={{ paddingTop: 10 }}>
        <Text>Time: {this.props.timestamp}</Text>
        <Text>Speed: {this.props.coords.speed}</Text>
        <Text>Latitude: {this.props.coords.latitude}</Text>
        <Text>Longitude: {this.props.coords.longitude}</Text>
      </View>
    );

    return (
      <View style={styles.container}>
        <View style={{ height: height - offset }}>
          <Button
            full
            onPress={props.locationSend}
            style={styles.spotMeButton}
          >
            <TextSMB>Spot Me Bro</TextSMB>
          </Button>
          {location}
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.locationPermission === 'undetermined'}
          >
            <View>
              <Button
                full
                onPress={props.askUserLocationPermission}
              >
                <TextSMB>Sounds Good</TextSMB>
              </Button>
            </View>
          </Modal>
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
