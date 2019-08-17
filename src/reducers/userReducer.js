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
  switch (action.type) {
    case CHECK_ASYNCSTORAGE_FOR_TOKEN:
      return { ...state, loading: true };
    case NO_ASYNCSTORAGE_TOKEN_FOUND:
      return { ...state, loading: false };
    case FACEBOOK_LOGIN_START:
        return { ...state, loading: true };
    case FACEBOOK_LOGIN_ERROR:
      return { ...state, loading: false, error: action.error };
    case SET_USER_TO_STATE:
      return { ...state, loading: false, user: action.user };
    case LOG_USER_OUT:
      return { ...state, user: {} };
    case GET_USERS_START:
      return { ...state, loading: true };
    case SET_USERS_TO_STATE:
      return { ...state, loading: false, users: action.users };
    case CHANGE_USER_FIELD:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          [action.field]: action.value,
        },
      };
    default:
      return state
  }
};
