export const LOCATION_SEND = 'LOCATION_SEND';

export function locationSend() {
  const payload = {};

  return {
    type: LOCATION_SEND,
    payload,
  };
}
