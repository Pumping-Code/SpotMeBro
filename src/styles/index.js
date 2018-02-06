import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const red = '#d81532';
const darkGrey = '#1a191c';
const grey = '#393d3f';
const black = '#071108';
const blueGrey = '#364652';

const styles = StyleSheet.create({
  // general styles
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    height,
    width,
    padding: 5,
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
    backgroundColor: red,
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

export default styles;
