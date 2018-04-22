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
// import { fromLeft, fromTop, fadeIn } from 'react-navigation-transitions';

// Screens
import LoadingScreen from '../screens/LoadingScreen';
import HomeScreen from '../screens/home/HomeScreen';
import BrofileScreen from '../screens/brofile/BrofileScreen';
import BroMapScreen from '../screens/bromap/BroMapScreen';
import SupBroScreen from '../screens/sign-up/SupBroScreen';
import HowBroScreen from '../screens/sign-up/HowBroScreen';

import TextSMB from '../modules/TextSMB';
import { lightGreen, blueGrey, grey } from '../styles/index';


const TabNav = TabNavigator(
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
      }),
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'md-home';
        } else if (routeName === 'Brofile') {
          iconName = 'md-person';
        } else if (routeName === 'BroMap') {
          iconName = 'md-globe';
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
}, {
  initialRouteName: 'SupBro',
});

export const AppNavigator = StackNavigator({
  Loading: {
    screen: LoadingScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SignUp: {
    screen: signUpStack,
    navigationOptions: () => ({
      header: null,
      gesturesEnabled: false,
    }),
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
