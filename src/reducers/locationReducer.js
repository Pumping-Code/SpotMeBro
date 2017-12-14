import {
  LOCATION_GET,
  LOCATION_SEND,
  GET_LOCATIONS_COMPLETE,
} from 'actions/locationActions';

const initialState = {
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
  if (action.type === LOCATION_GET) {
    const { coords, timestamp } = action.payload;
    return { ...state, coords, timestamp };
  } else if (action.type === LOCATION_SEND) {
    return { ...state, loading: true };
  } else if (action.type === GET_LOCATIONS_COMPLETE) {
    return { ...state, loading: false, userLocations: action.userLocations };
  }
  return state;
}
