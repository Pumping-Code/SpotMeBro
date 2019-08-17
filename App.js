import React, { Component } from 'react';
import { Notifications } from 'expo';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { View, Image, ActivityIndicator } from 'react-native';
// import { Toast } from 'native-base';
import styles, { blueGrey, darkGrey, grey, lightGreen, offWhite } from './src/styles/index';
// import Reactotron from 'reactotron-react-native';
import AppWithNavigationState from './src/navigators/AppNavigator';
// import host from './host';
import store from './src/store';
// import registerForPushNotificationsAsync from 'registerForPushNotificationsAsync';
import NavigationService from './src/navigators/NavigationService';

// Reactotron.configure({ host }).useReactNative();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'anton-regular': require('./assets/fonts/Anton-Regular.ttf'),
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      // 'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      // 'open-sans-bold-italic': require('./assets/fonts/OpenSans-BoldItalic.ttf'),
      // 'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
      // 'open-sans-light-italic': require('./assets/fonts/OpenSans-LightItalic.ttf'),
      // 'open-sans-italic': require('./assets/fonts/OpenSans-Italic.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    });
    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this.notificationSubscription = Notifications.addListener(this.handleNotification);

    setTimeout(() => {
      this.setState({ fontLoaded: true });
    }, 3000)
  }

  handleNotification(notification) {
    console.log('notification', notification);
    // Toast.show({
    //   text: 'A BRO NEEDS YOUR HELP',
    //   position: 'bottom',
    //   buttonText: 'Okay',
    //   onClose() {
    //     console.log('closed manually');
    //   },
    // });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <Provider store={store}>
          <AppWithNavigationState
            ref={(navigatorRef) => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </Provider>
      );
    }

    return (
      <View style={[styles.container, styles.justifyCenter, { alignItems: 'center' }]}>
        <Image
          style={{ height: 200, width: 200, marginBottom: 50 }}
          source={require('./assets/images/smb-icon.png')}
        />
        <ActivityIndicator
          animating
          color={blueGrey}
          size="large"
        />
      </View>
    );
  }
}

export default App;
