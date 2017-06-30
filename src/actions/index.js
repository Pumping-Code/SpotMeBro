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
    const { latitude, longitude } = getState().location.coords;
    const request = fetch('https://spot-me-bro-server.herokuapp.com/locations', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location: {
          lat: latitude,
          lng: longitude,
        },
      }),
    });

    dispatch({
      type: LOCATION_SEND,
      payload: request,
    });
  };
}
