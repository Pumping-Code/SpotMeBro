import { LOCATION_GET, LOCATION_SEND } from 'actions/locationActions';

const initialState = {
  coords: {
    speed: null,
    latitude: null,
    longitude: null,
    accuracy: null,
    heading: null,
    altitude: null,
    altitudeAccuracy: null,
  },
  timestamp: null,
};

export default function (state = initialState, action) {
  if (action.type === LOCATION_GET) {
    return Object.assign({}, state, action.payload);
  } else if (action.type === LOCATION_SEND) {
    return { ...state, payload: action.payload };
  }
  return state;
}
