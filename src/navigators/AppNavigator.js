import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

// Containers
import SplashContainer from 'containers/SplashContainer';
import AuthContainer from 'containers/AuthContainer';
import HomeContainer from 'containers/HomeContainer';
import ProfileContainer from 'containers/ProfileContainer';
import BroMapContainer from 'containers/BroMapContainer';
import SupBroContainer from 'containers/sign-up/SupBroContainer';
import HowBroScreen from 'containers/sign-up/HowBroScreen';

export const AppNavigator = StackNavigator({
  Splash: { screen: SplashContainer },
  Auth: { screen: AuthContainer },
  Home: { screen: HomeContainer },
  Profile: { screen: ProfileContainer },
  BroMap: { screen: BroMapContainer },
  SupBro: { screen: SupBroContainer },
  HowBro: { screen: HowBroScreen },
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
