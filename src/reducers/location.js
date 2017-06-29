import { LOCATION_GET, LOCATION_SEND } from '../actions/';

const initialState = {
  coords: {
    speed: null,
    longitude: null,
    latitude: null,
    accuracy: null,
    heading: null,
    altitude: null,
    altitudeAccuracy: null,
  },
  timestamp: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOCATION_GET:
      return action.payload;
    case LOCATION_SEND:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
}
