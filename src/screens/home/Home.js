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
import TextSMB from '../../modules/TextSMB';
import TextSMB2 from '../../modules/TextSMB2';
import styles, { buttonStyles, blueGrey, darkGrey, lightGreen } from '../../styles';

const { height, width } = Dimensions.get('window');

const spotWidth = 64;
const meWidth = 41;
const broWidth = 117;
const broHeight = 119;

const valuesForAnimation = [];
for (let i = 0; i < 20; i += 1) {
  valuesForAnimation.push(i);
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnimation: false,
    };
    this.animateButton = new Animated.Value(0);
    this.animateOpacity = new Animated.Value(1);
    this.shrinkInterpolate = this.animateButton.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.9],
    });
    this.pressShrink = this.pressShrink.bind(this);

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
      outputRange: [-100, ((height - (broHeight / 2)) / 2) - 58],
    });
    this.animateTextScale = new Animated.Value(1);
    this.pressOutAnimations = this.pressOutAnimations.bind(this);
    this.animatedViews = [];
    valuesForAnimation.forEach((value) => {
      this.animatedViews[value] = new Animated.Value(0);
    });
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
        useNativeDriver: true,
      },
    ).start();
  }

  pressOutAnimations() {
    const animations = valuesForAnimation.map(item => Animated.timing(
      this.animatedViews[item],
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      },
    ));
    this.setState({ showAnimation: true });
    Animated.sequence([
      Animated.stagger(1000, [
        Animated.parallel([
          Animated.spring(
            this.animateOpacity,
            {
              toValue: 0.25,
              friction: 1,
              useNativeDriver: true,
            },
          ),
          Animated.spring(
            this.animateButton,
            {
              toValue: 0,
              friction: 1,
              useNativeDriver: true,
            },
          ),
        ]),
        Animated.stagger(5, animations),
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
            toValue: 3,
            duration: 200,
            easing: Easing.linear,
          },
        ),
      ]),
    ])
      .start(() => {
        setTimeout(() => {
          this.props.locationSend();
          this.animateText1.setValue(0);
          this.animateText2.setValue(0);
          this.animateText3.setValue(0);
          this.animateOpacity.setValue(1);
          this.animateTextScale.setValue(1);
          valuesForAnimation.forEach((value) => {
            this.animatedViews[value].setValue(0);
          });
          this.setState({ showAnimation: false });
        }, 500);
      });
  }

  render() {
    return (
      <View style={[styles.container, styles.justifyCenter]}>
        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: blueGrey,
            opacity: this.animateOpacity,
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
                this.pressOutAnimations();
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

          <Modal transparent visible={this.state.showAnimation}>
            <Animated.View
              style={{
                flex: 1,
                transform: [{ scale: this.animateTextScale }],
              }}
            >
              {
                valuesForAnimation.reverse().map((a, i) => (
                  <Animated.View
                    key={i}
                    style={{
                      opacity: this.animatedViews[a],
                      height: height / 20,
                      width,
                      backgroundColor: lightGreen,
                    }}
                  />
                ))
              }
              <Animated.Text
                style={{
                  textAlign: 'center',
                  fontSize: 35,
                  color: darkGrey,
                  fontFamily: 'anton-regular',
                  position: 'absolute',
                  left: this.text1Interpolate,
                  bottom: ((height + broHeight) / 2) - 58,
                  backgroundColor: 'transparent',
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
                  bottom: ((height + broHeight) / 2) - 58,
                  backgroundColor: 'transparent',
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
                }}
              >
                BRO
              </Animated.Text>
            </Animated.View>
          </Modal>

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
