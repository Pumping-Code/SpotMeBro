import {
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
    speed: 'null',
    latitude: 30.2672,
    longitude: -97.7431,
    accuracy: 'null',
    heading: 'null',
    altitude: 'null',
    altitudeAccuracy: 'null',
  },
  timestamp: 'null',
  loading: false,
  fetchingLocation: false,
  sendingLocation: false,
  userLocations: [],
  errorMessage: '',
};

export default function locationReducer(state = initialState, action) {
  if (action.type === CHECK_LOCATION_START) {
    return { ...state, loading: true };
  } else if (action.type === CHECK_LOCATION_COMPLETE) {
    return {
      ...state,
      loading: false,
      locationPermission: action.locationPermission,
    };
  } else if (action.type === GET_USER_LOCATION) {
    return { ...state, fetchingLocation: true };
  } else if (action.type === SET_USER_LOCATION) {
    return {
      ...state,
      coords: action.coords,
      timestamp: action.timestamp,
      fetchingLocation: false,
    };
  } else if (action.type === USER_LOCATION_ERROR) {
    return { ...state, errorMessage: action.errorMessage };
  } else if (action.type === LOCATION_SEND) {
    return { ...state, sendingLocation: true };
  } else if (action.type === GET_LOCATIONS_COMPLETE) {
    return { ...state, sendingLocation: false, userLocations: action.userLocations };
  }
  return state;
}
