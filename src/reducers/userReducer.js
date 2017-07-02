import {
  FACEBOOK_LOGIN_START,
  FACEBOOK_LOGIN_ERROR,
  SET_USER_TO_STATE,
} from '../actions/userActions';

const initialState = {
  user: {},
  loading: false,
  error: {},
};

export default function userReducer(state = initialState, action) {
  if (action.type === FACEBOOK_LOGIN_START) {
    return { ...state, loading: true };
  } else if (action.type === FACEBOOK_LOGIN_ERROR) {
    return { ...state, loading: false, error: action.error };
  } else if (action.type === SET_USER_TO_STATE) {
    return { ...state, loading: false, user: action.user };
  }
  return state;
}
