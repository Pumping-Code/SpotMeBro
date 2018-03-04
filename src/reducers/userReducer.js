import {
  CHECK_ASYNCSTORAGE_FOR_TOKEN,
  NO_ASYNCSTORAGE_TOKEN_FOUND,
  FACEBOOK_LOGIN_START,
  FACEBOOK_LOGIN_ERROR,
  SET_USER_TO_STATE,
  LOG_USER_OUT,
  GET_USERS_START,
  SET_USERS_TO_STATE,
  CHANGE_USER_FIELD,
} from 'actions/userActions';

const initialState = {
  user: {},
  loading: false,
  error: {},
  users: [],
  signUp: {
    heightFeet: '',
    heightInches: '',
    weight: '',
    benchMax: '',
    squatMax: '',
    howBro: '',
  },
};

export default function userReducer(state = initialState, action) {
  if (action.type === CHECK_ASYNCSTORAGE_FOR_TOKEN) {
    return { ...state, loading: true };
  } else if (action.type === NO_ASYNCSTORAGE_TOKEN_FOUND) {
    return { ...state, loading: false };
  } else if (action.type === FACEBOOK_LOGIN_START) {
    return { ...state, loading: true };
  } else if (action.type === FACEBOOK_LOGIN_ERROR) {
    return { ...state, loading: false, error: action.error };
  } else if (action.type === SET_USER_TO_STATE) {
    return { ...state, loading: false, user: action.user };
  } else if (action.type === LOG_USER_OUT) {
    return { ...state, user: {} };
  } else if (action.type === GET_USERS_START) {
    return { ...state, loading: true };
  } else if (action.type === SET_USERS_TO_STATE) {
    return { ...state, loading: false, users: action.users };
  } else if (action.type === CHANGE_USER_FIELD) {
    return {
      ...state,
      signUp: {
        ...state.signUp,
        [action.field]: action.value,
      },
    };
  }
  return state;
}
