import React, { Component } from 'react';
import { Font, Notifications } from 'expo';
import { Provider } from 'react-redux';
import { Root, Toast } from 'native-base';
// import Reactotron from 'reactotron-react-native';
import AppWithNavigationState from './src/navigators/AppNavigator';
// import host from './host';
import store from 'store';
// import registerForPushNotificationsAsync from 'registerForPushNotificationsAsync';

// Reactotron.configure({ host }).useReactNative();

class App extends Component {
  async componentWillMount() {
    await Font.loadAsync({
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    });
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

  // componentDidMount() {
  //   Reactotron.connect();
  // }

  render() {
    return (
      <Root>
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      </Root>
    );
  }
}

export default App;
