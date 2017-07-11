import React from 'react';
import { Provider, connect } from 'react-redux';
import AppWithNavigationState from './src/navigators/AppNavigator';
import store from './src/store';

const App = () => (
  <Provider store={store}>
   <AppWithNavigationState />
  </Provider>
);

export default App;
