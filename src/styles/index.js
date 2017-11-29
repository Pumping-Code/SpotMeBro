import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
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
  map: {
    height,
    width,
  },
});

export default styles;
