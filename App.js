import React from 'react';
import { Provider, connect } from 'react-redux';
import { Actions, Router, Scene, Modal } from 'react-native-router-flux';
import AppWithNavigationState from './src/navigators/AppNavigator';
import store from 'store';

// Containers
import HomeContainer from 'containers/HomeContainer';
import AuthContainer from 'containers/AuthContainer';
import SplashContainer from 'containers/SplashContainer';
import ProfileContainer from 'containers/ProfileContainer';

const RouterWithRedux = connect()(Router);

const Scenes = Actions.create(
  <Scene key="modal" component={Modal}>
    <Scene key="root">
      <Scene key="splash" component={SplashContainer} initial hideNavBar />
      <Scene key="auth" component={AuthContainer} title="Login" hideNavBar />
      <Scene key="home" component={HomeContainer} title="Spot Me Bro" hideNavBar />
      <Scene key="profile" component={ProfileContainer} title="Profile" hideNavBar />
    </Scene>
  </Scene>,
);

const App = () => (
  <Provider store={store}>
   <AppWithNavigationState />
  </Provider>
);

export default App;
