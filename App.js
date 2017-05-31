import React from 'react';
import { Provider, connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Actions, Router, Scene, Modal } from 'react-native-router-flux';
import store from './src/store';

//Containers
import HomeContainer from './src/containers/HomeContainer';

const RouterWithRedux = connect()(Router);

const Scenes = Actions.create(
  <Scene key="modal" component={Modal}>
    <Scene key="root">
      <Scene key="home" component={HomeContainer} title="Home" initial />
    </Scene>
  </Scene>,
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux
          scenes={Scenes}
          sceneStyle={{ backgroundColor: '#222' }}
          navigationBarStyle={{ backgroundColor: '#D7D7D7' }}
          titleStyle={{ color: 'darkslateblue' }}
        />
      </Provider>
    );
  }
}

export default App;
