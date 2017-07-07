import smbApi from 'services/api';

export const LOCATION_GET = 'LOCATION_GET';
export const LOCATION_SEND = 'LOCATION_SEND';

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

    const request = smbApi({
      method,
      route,
      data,
    })
    .then((response) => {
      console.log(response);
    });

    dispatch({
      type: LOCATION_SEND,
      payload: request,
    });
  };
}
