import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleware = applyMiddleware(
  thunk,
  createLogger(),
);
const store = createStore(reducers, composeWithDevTools(middleware));

export default store;
