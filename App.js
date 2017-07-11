import React, { Component } from 'react';
import { Font } from 'expo';
import { Provider } from 'react-redux';
import AppWithNavigationState from './src/navigators/AppNavigator';
import store from 'store';

class App extends Component {
  async componentWillMount() {
    await Font.loadAsync({
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    });
  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
