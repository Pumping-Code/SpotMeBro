import { LOCATION_SEND } from '../actions/';

const initialState = {
  lat: null,
  lng: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOCATION_SEND:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
}
