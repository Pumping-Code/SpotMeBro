import { combineReducers } from 'redux';
import location from './location';
import userReducer from './userReducer';
import routes from './routes';

export default combineReducers({
  location,
  userReducer,
  routes,
});
