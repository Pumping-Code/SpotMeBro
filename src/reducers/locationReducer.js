import {
  LOCATION_GET,
  LOCATION_SEND,
  GET_LOCATIONS_COMPLETE,
  CHECK_LOCATION_START,
  CHECK_LOCATION_COMPLETE,
  SET_USER_LOCATION,
  USER_LOCATION_ERROR,
  GET_USER_LOCATION,
} from 'actions/locationActions';

const initialState = {
  locationPermission: '',

  coords: {
    speed: null,
    latitude: 30.2672,
    longitude: -97.7431,
    accuracy: null,
    heading: null,
    altitude: null,
    altitudeAccuracy: null,
  },
  timestamp: null,
  loading: false,
  userLocations: [],
};

export default function locationReducer(state = initialState, action) {
  if (action.type === CHECK_LOCATION_START) {
    return { ...state, loading: true };
  } else if (CHECK_LOCATION_COMPLETE) {
    return {
      ...state,
      loading: false,
      locationPermission: action.locationPermission,
    };
  } else if (GET_USER_LOCATION) {
    return { ...state };
  } else if (SET_USER_LOCATION) {
    return { ...state };
  } else if (USER_LOCATION_ERROR) {
    return { ...state };
  } else if (action.type === LOCATION_GET) {
    const { coords, timestamp } = action.payload;
    return { ...state, coords, timestamp };
  } else if (action.type === LOCATION_SEND) {
    return { ...state, loading: true };
  } else if (action.type === GET_LOCATIONS_COMPLETE) {
    return { ...state, loading: false, userLocations: action.userLocations };
  }
  return state;
}
