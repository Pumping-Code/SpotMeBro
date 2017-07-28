import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import userReducer from './userReducer';
import nav from './navigationReducer';

export default combineReducers({
  locationState: locationReducer,
  userState: userReducer,
  nav,
});
