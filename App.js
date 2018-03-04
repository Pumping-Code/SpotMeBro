import React, { Component } from 'react';
import { Font, Notifications } from 'expo';
import { Provider } from 'react-redux';
import { Toast, View, Text } from 'native-base';
import styles from './src/styles/index';
// import Reactotron from 'reactotron-react-native';
import AppWithNavigationState from './src/navigators/AppNavigator';
// import host from './host';
import store from './src/store';
// import registerForPushNotificationsAsync from 'registerForPushNotificationsAsync';

// Reactotron.configure({ host }).useReactNative();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'anton-regular': require('./assets/fonts/Anton-Regular.ttf'),
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-bold-italic': require('./assets/fonts/OpenSans-BoldItalic.ttf'),
      'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
      'open-sans-light-italic': require('./assets/fonts/OpenSans-LightItalic.ttf'),
      'open-sans-italic': require('./assets/fonts/OpenSans-Italic.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    });
    this.setState({ fontLoaded: true });
    // registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this.notificationSubscription = Notifications.addListener(this.handleNotification);
  }

  handleNotification(notification) {
    console.log('--------');
    console.log(notification);
    console.log('--------');
    Toast.show({
      text: 'A BRO NEEDS YOUR HELP',
      position: 'bottom',
      buttonText: 'Okay',
      onClose() {
        console.log('closed manually');
      },
    });
  }

  render() {
    if (this.state.fontLoaded) {
      console.log('fonts loaded: ', this.state.fontLoaded);
      return (
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      );
    }
    return (
      <View style={styles.container}>
        <Text>SMB Logo</Text>
      </View>
    );
  }
}

export default App;
