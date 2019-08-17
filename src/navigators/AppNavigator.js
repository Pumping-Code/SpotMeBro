import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import { Icon } from 'native-base';
// import { fromLeft, fromTop, fadeIn } from 'react-navigation-transitions';

// Screens
import AuthLoadingScreen from '../screens/loading/AuthLoadingScreen';
import HomeScreen from '../screens/home/HomeScreen';
import BrofileScreen from '../screens/brofile/BrofileScreen';
import BroMapScreen from '../screens/bromap/BroMapScreen';
import SupBroScreen from '../screens/sign-up/SupBroScreen';
import HowBroScreen from '../screens/sign-up/HowBroScreen';

import TextSMB from '../modules/TextSMB';
import { lightGreen, blueGrey, grey } from '../styles/index';

const TabNav = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'Spot Me Bro',
        headerTitle: (
          <TextSMB>Spot Me Bro</TextSMB>
        ),
        headerLeft: null,
        gesturesEnabled: false,
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="md-home" style={{ color: tintColor }} />;
        },
      }),
    },
    BroMap: {
      screen: BroMapScreen,
      navigationOptions: () => ({
        title: 'Bro Map',
        headerTitle: (
          <TextSMB>Bro Map</TextSMB>
        ),
        headerLeft: null,
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="md-globe" style={{ color: tintColor }} />;
        },
      }),
    },
    Brofile: {
      screen: BrofileScreen,
      navigationOptions: () => ({
        title: 'Brofile',
        headerTitle: (
          <TextSMB>Brofile</TextSMB>
        ),
        headerLeft: null,
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="md-person" style={{ color: tintColor }} />;
        },
      }),
    },
  },
  {
    initialRoute: 'Home',    
    order: ['Home', 'BroMap', 'Brofile'],
    // animationEnabled: false,
    // swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: lightGreen,
      inactiveTintColor: blueGrey,
      showLabel: false,
      style: { backgroundColor: grey },
    },
  },
);

const signUpStack = createStackNavigator({
  SupBro: {
    screen: SupBroScreen,
  },
  HowBro: {
    screen: HowBroScreen,
  },
}, {
  initialRouteName: 'SupBro',
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabNav,
    SignUp: signUpStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));