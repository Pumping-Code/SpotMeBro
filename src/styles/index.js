import { StyleSheet, Dimensions } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { Header } from 'react-navigation';

const { height, width } = Dimensions.get('window');

// height of react navigation header
export const headerHeight = Header.height;
// default height of react navigation bottom tabnav
export const tabNavHeight = 49;
// if iPhone X add 58
export const iPhoneXPadding = ifIphoneX(58, 0);
export const offset = headerHeight + tabNavHeight + iPhoneXPadding;

export const blueGrey = '#152c43';
export const darkGrey = '#59687d';
export const grey = '#8993a2';
export const lightGreen = '#bddac8';
export const offWhite = '#fcfaf9';

export const textColor = blueGrey;

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

export const formStyles = StyleSheet.create({
  container: {
    padding: 15,
  },
  textInput: {
    height: 50,
    borderColor: darkGrey,
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 10,
    fontSize: 20,
    fontFamily: primaryText,
    marginBottom: 5,
  },
});

export const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: blueGrey,
  },
  primaryText: {
    color: offWhite,
    fontFamily: primaryText,
    fontSize: 20,
  },
  secondary: {
    backgroundColor: darkGrey,
  },
  secondaryText: {
    color: offWhite,
    fontFamily: primaryText,
    fontSize: 20,
  },
});

export default styles;
