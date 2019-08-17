import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import userReducer from './userReducer';

export default combineReducers({
  locationState: locationReducer,
  userState: userReducer,
});
