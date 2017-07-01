import React from 'react';
import { Provider, connect } from 'react-redux';
import { Actions, Router, Scene, Modal } from 'react-native-router-flux';
import store from './src/store';

// Containers
import HomeContainer from './src/containers/HomeContainer';
import AuthContainer from './src/containers/AuthContainer';

const RouterWithRedux = connect()(Router);

const Scenes = Actions.create(
  <Scene key="modal" component={Modal}>
    <Scene key="root">
      <Scene key="home" component={HomeContainer} title="Spot Me Bro" />
      <Scene key="auth" component={AuthContainer} title="Login" initial />
    </Scene>
  </Scene>,
);

const App = () => (
  <Provider store={store}>
    <RouterWithRedux
      scenes={Scenes}
      sceneStyle={{ backgroundColor: '#FFF' }}
      navigationBarStyle={{ backgroundColor: '#D7D7D7' }}
      titleStyle={{ color: 'darkslateblue' }}
    />
  </Provider>
);

export default App;
