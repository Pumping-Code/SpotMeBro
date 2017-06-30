import { combineReducers } from 'redux';
import location from './location';
import user from './user';
import routes from './routes';

export default combineReducers({
  location,
  user,
  routes,
});
