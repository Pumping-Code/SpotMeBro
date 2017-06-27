import { combineReducers } from 'redux';
import location from './location';
import routes from './routes';

export default combineReducers({
  location,
  routes,
});
