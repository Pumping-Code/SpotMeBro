import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, Modal } from 'react-native';
import { Button, Text } from 'native-base';
import TextSMB from 'components/modules/TextSMB';
import TextSMB2 from 'components/modules/TextSMB2';
import LoadingModal from 'components/modules/LoadingModal';
import styles, { buttonStyles, blueGrey, darkGrey, lightGreen, offset } from 'styles';

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
            <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
              <TextSMB style={{ fontSize: 25 }}>
                Bro,
              </TextSMB>
              <TextSMB2 style={{ fontSize: 18, marginBottom: 10 }}>
                We need access to your location so we can get you spots from other Bros.
              </TextSMB2>
              <Button
                full
                onPress={props.askUserLocationPermission}
                style={buttonStyles.primary}
              >
                <TextSMB style={buttonStyles.primaryText}>Got it</TextSMB>
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
