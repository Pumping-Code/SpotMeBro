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
import { Button } from 'native-base';
import TextSMB from 'components/modules/TextSMB';
import TextSMB2 from 'components/modules/TextSMB2';
import LoadingModal from 'components/modules/LoadingModal';
import styles, { buttonStyles, blueGrey, darkGrey, lightGreen, offWhite, offset } from 'styles';

const { height, width } = Dimensions.get('window');

const spotWidth = 64;
const meWidth = 41;
const broWidth = 117;
const broHeight = 119;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: true,
    };
    this.animateButton = new Animated.Value(0);
    this.shrinkInterpolate = this.animateButton.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.9],
    });
    this.pressShrink = this.pressShrink.bind(this);

    this.animateFlash = new Animated.Value(0);
    this.animateText1 = new Animated.Value(0);
    this.animateText2 = new Animated.Value(0);
    this.animateText3 = new Animated.Value(0);
    this.text1Interpolate = this.animateText1.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, ((width - (spotWidth + meWidth)) / 2) - 3],
    });
    this.text2Interpolate = this.animateText2.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, ((width - (spotWidth + meWidth)) / 2) - 2],
    });
    this.text3Interpolate = this.animateText3.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, ((height - broHeight) / 2) - 112],
    });
    this.animateTextScale = new Animated.Value(0);
    this.textScaleInterpolate = this.animateTextScale.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 10],
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
    this.setState({ showButton: false });
    Animated.sequence([
      Animated.stagger(50, [
        Animated.spring(
          this.animateButton,
          {
            toValue: 0,
            friction: 3,
          },
        ),
        Animated.timing(
          this.animateFlash,
          {
            toValue: 1,
            duration: 100,
            easing: Easing.linear,
          },
        ),
      ]),
      Animated.sequence([
        Animated.timing(
          this.animateText1,
          {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
          },
        ),
        Animated.timing(
          this.animateText2,
          {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
          },
        ),
        Animated.timing(
          this.animateText3,
          {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
          },
        ),
        Animated.timing(
          this.animateTextScale,
          {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
          },
        ),
      ]),
    ]).start(this.props.locationSend);
  }

  render() {
    return (
      <View style={[styles.container, styles.justifyCenter]}>
        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'center',
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
              onPressOut={() => {
                this.pressOutBounce();
              }}
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


          <Animated.View
            style={{
              display: this.state.showButton ? 'none' : 'flex',
              position: 'absolute',
              opacity: this.animateFlash,
              backgroundColor: offWhite,
              flexDirection: 'row',
              flexWrap: 'wrap',
              flex: 1,
              height,
              width,
            }}
          />

          <Animated.Text
            style={{
              textAlign: 'center',
              fontSize: 35,
              color: darkGrey,
              fontFamily: 'anton-regular',
              position: 'absolute',
              left: this.text1Interpolate,
              backgroundColor: 'transparent',
              zIndex: 2,
              transform: [{ scale: this.textScaleInterpolate }],
            }}
          >
              SPOT
          </Animated.Text>
          <Animated.Text
            style={{
              textAlign: 'center',
              fontSize: 35,
              color: darkGrey,
              fontFamily: 'anton-regular',
              position: 'absolute',
              right: this.text2Interpolate,
              backgroundColor: 'transparent',
              zIndex: 2,
              transform: [{ scale: this.textScaleInterpolate }],
            }}
          >
              ME
          </Animated.Text>
          <Animated.Text
            style={{
              textAlign: 'center',
              fontSize: 81,
              color: blueGrey,
              fontFamily: 'anton-regular',
              position: 'absolute',
              left: (width / 2) - (broWidth / 2),
              bottom: this.text3Interpolate,
              backgroundColor: 'transparent',
              zIndex: 2,
              transform: [{ scale: this.textScaleInterpolate }],
            }}
          >
              BRO
          </Animated.Text>


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
          <LoadingModal
            fetching={this.props.sendingLocation}
            opacity={1}
            flavorText="Notifying all Bros in the area..."
            animationType="slide"
          />
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
