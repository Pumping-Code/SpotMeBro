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
};

export default function (state = initialState, action) {
  if (action.type === LOCATION_GET) {
    return Object.assign({}, state, action.payload);
  } else if (action.type === LOCATION_SEND) {
    return { ...state, payload: action.payload, loading: true };
  } else if (action.type === GET_LOCATIONS_COMPLETE) {
    return { ...state, loading: false };
  }
  return state;
}
