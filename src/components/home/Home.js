import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Dimensions,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';
import { Button, Text } from 'native-base';
import TextSMB from 'components/modules/TextSMB';
import TextSMB2 from 'components/modules/TextSMB2';
import LoadingModal from 'components/modules/LoadingModal';
import styles, { buttonStyles, blueGrey, darkGrey, lightGreen, offWhite, offset } from 'styles';

const { height, width } = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);

    this.animateButton = new Animated.Value(0);
    this.shrinkInterpolate = this.animateButton.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.9],
    });
    this.pressShrink = this.pressShrink.bind(this);

    this.animateFlash = new Animated.Value(0);
    this.flashInterpolate = this.animateFlash.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });
    this.pressOutBounce = this.pressOutBounce.bind(this);
  }

  componentDidMount() {
    this.props.checkLocationPermission();
  }

  pressShrink() {
    Animated.timing(
      this.animateButton,
      {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
      },
    ).start();
  }

  pressOutBounce() {
    Animated.stagger(100, [
      Animated.spring(
        this.animateButton,
        {
          toValue: 0,
          friction: 3,
        },
      ),
      Animated.sequence([
        Animated.timing(
          this.animateFlash,
          {
            toValue: 1,
            duration: 100,
            easing: Easing.linear,
          },
        ),
        Animated.timing(
          this.animateFlash,
          {
            toValue: 0,
            duration: 1000,
            easing: Easing.linear,
          },
        ),
      ]),
    ]).start();
  }

  render() {
    return (
      <View style={[styles.container, styles.justifyCenter]}>
        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'center',
            opacity: this.flashInterpolate,
            backgroundColor: blueGrey,
          }}
        >
          <Animated.View
            style={[
              buttonStyles.spotMeButton,
              { transform: [{ scale: this.shrinkInterpolate }] },
            ]}
          >
            <TouchableWithoutFeedback
              onPressIn={this.pressShrink}
              onPressOut={this.pressOutBounce}
              onPress={this.props.locationSend}
            >
              <Animated.Image
                style={{
                  width: 200,
                  height: 200,
                  transform: [
                    { scale: this.shrinkInterpolate },
                  ],
                }}
                source={require('../../../assets/images/smb-icon.png')}
              />
            </TouchableWithoutFeedback>
          </Animated.View>

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
                onPress={this.props.askUserLocationPermission}
                style={buttonStyles.primary}
              >
                <TextSMB style={buttonStyles.primaryText}>Got it</TextSMB>
              </Button>
            </View>
          </Modal>
        </Animated.View>
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
