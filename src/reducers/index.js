import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import userReducer from './userReducer';
import navigationReducer from './navigationReducer';

export default combineReducers({
  locationState: locationReducer,
  userState: userReducer,
  nav: navigationReducer,
});
