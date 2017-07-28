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
    const { latitude, longitude } = state.locationState.coords;
    const method = 'POST';
    const route = '/locations';
    const data = {
      location: {
        lat: latitude,
        lng: longitude,
      },
    };
    // Set loading to true
    dispatch({ type: LOCATION_SEND });
    // sent location to api
    smbApi({
      method,
      route,
      data,
    })
    .then((response) => {
      // route user to Bro Map
      dispatch(NavigationActions.navigate({ routeName: 'BroMap' }));
      // set locations to redux and set loading false
      dispatch({
        type: GET_LOCATIONS_COMPLETE,
        userLocations: response.data,
      });
    });
  };
}
