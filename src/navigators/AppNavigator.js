import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

// Containers
import SplashContainer from 'containers/SplashContainer';
import AuthContainer from 'containers/AuthContainer';
import HomeContainer from 'containers/HomeContainer';
import ProfileContainer from 'containers/ProfileContainer';
import BroMapContainer from 'containers/BroMapContainer';

export const AppNavigator = StackNavigator({
  Splash: { screen: SplashContainer },
  Auth: { screen: AuthContainer },
  Home: { screen: HomeContainer },
  Profile: { screen: ProfileContainer },
  BroMap: { screen: BroMapContainer },
});

function AppWithNavigationState({ dispatch, nav }) {
  return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
