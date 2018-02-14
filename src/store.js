import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from './reducers';
import { navigationReduxMiddleware } from 'navigators/AppNavigator';

// const middleware = applyMiddleware(promise(), thunk, createLogger());
const middleware = applyMiddleware(
  promise(),
  thunk,
  createLogger(),
  navigationReduxMiddleware,
);
const store = createStore(reducers, composeWithDevTools(middleware));

export default store;
