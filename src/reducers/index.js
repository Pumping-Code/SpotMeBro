import { combineReducers } from 'redux';
import location from './location';
import userReducer from './userReducer';
import nav from './navigationReducer';

export default combineReducers({
  locationState: location,
  userState: userReducer,
  nav,
});
