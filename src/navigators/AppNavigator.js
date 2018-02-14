import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import { Icon } from 'native-base';

// Screens
import SplashScreen from '../screens/SplashScreen';
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BroMapScreen from '../screens/BroMapScreen';
import SupBroScreen from '../screens/sign-up/SupBroScreen';
import HowBroScreen from '../screens/sign-up/HowBroScreen';

import { lightGreen, blueGrey, grey } from '../styles/index';

const TabNav = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    BroMap: {
      screen: BroMapScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const routeName = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = '';
        } else if (routeName === 'Profile') {
          iconName = '';
        } else if (routeName === ' BroMap') {
          iconName = '';
        }
        return <Icon name={iconName} style={{ color: tintColor }} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    initialRoute: 'Home',
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: lightGreen,
      inactiveTintColor: blueGrey,
      showLabel: false,
      style: { backgroundColor: grey },
    },
  },
);

const signUpStack = StackNavigator({
  SupBro: {
    screen: SupBroScreen,
  },
  HowBro: {
    screen: HowBroScreen,
  },
});

export const AppNavigator = StackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Auth: { screen: AuthScreen },
  SignUp: {
    screen: signUpStack,
  },
  App: {
    screen: TabNav,
  },
});

// Have to invoke this function here and export because
// createReactNavigationReduxMiddleware MUST come before
// createReduxBoundAddListener or redux won't work.
export const navigationReduxMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const addListener = createReduxBoundAddListener('root');

function AppWithNavigationState({ dispatch, nav }) {
  return (
    <AppNavigator
      navigation={addNavigationHelpers({
        dispatch,
        state: nav,
        addListener,
      })}
    />
  );
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
