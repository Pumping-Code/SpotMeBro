import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const blueGrey = '#152c43';
export const darkGrey = '#59687d';
export const grey = '#8993a2';
export const lightGreen = '#bddac8';
export const offWhite = '#fcfaf9';

export const primaryText = 'anton-regular';

const styles = StyleSheet.create({
  // general styles
  container: {
    flex: 1,
    backgroundColor: offWhite,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  // full width of device screen
  fullWidth: width,
  // full height of device screen
  fullHeight: height,

  // Home
  home: {
    backgroundColor: blueGrey,
  },

  spotMeButton: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: lightGreen,
  },


  // BroMap
  map: {
    height,
    width,
  },

  // Brofile
  profilePic: {
    alignSelf: 'flex-start',
  },
});

export const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: lightGreen,
  },
  primaryText: {
    color: blueGrey,
    fontFamily: primaryText,
    fontSize: 20,
  },
  secondary: {
    backgroundColor: grey,
  },
});

export default styles;
