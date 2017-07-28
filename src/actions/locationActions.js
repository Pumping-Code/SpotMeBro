import smbApi from 'services/api';
import { NavigationActions } from 'react-navigation';

export const LOCATION_GET = 'LOCATION_GET';
export const LOCATION_SEND = 'LOCATION_SEND';
export const GET_LOCATIONS_COMPLETE = 'GET_LOCATIONS_COMPLETE';

export function locationGet({ location }) {
  return {
    type: LOCATION_GET,
    payload: location,
  };
}

export function locationSend() {
  return (dispatch, getState) => {
    const state = getState();
    const { latitude, longitude } = state.location.coords;
    const method = 'POST';
    const route = '/locations';
    const data = {
      location: {
        lat: latitude,
        lng: longitude,
      },
    };
    dispatch({
      type: LOCATION_SEND,
      payload: request,
    });
    setTimeout(() => {
      dispatch({ type: GET_LOCATIONS_COMPLETE });
      dispatch(NavigationActions.navigate({ routeName: 'BroMap' }));
    }, 2000);
    const request = smbApi({
      method,
      route,
      data,
    })
    .then((response) => {
      console.log(response);
    });
  };
}
