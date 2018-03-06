import { Platform } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { NavigationActions } from 'react-navigation';
import smbApi from 'services/api';

export const LOCATION_SEND = 'LOCATION_SEND';
export const GET_LOCATIONS_COMPLETE = 'GET_LOCATIONS_COMPLETE';
export const SET_USER_LOCATION = 'SET_USER_LOCATION';
export const USER_LOCATION_ERROR = 'USER_LOCATION_ERROR';
export const CHECK_LOCATION_START = 'CHECK_LOCATION_START';
export const CHECK_LOCATION_COMPLETE = 'CHECK_LOCATION_COMPLETE';
export const GET_USER_LOCATION = 'GET_USER_LOCATION';

// share location and notfify bros who are in the area
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
      })
      .catch((err) => {
        console.log('err in location actions', err);
      });
  };
}

// watch the users location and set it to state then thy move
export function watchUserLocation() {
  return (dispatch) => {
    dispatch({ type: GET_USER_LOCATION });

    Location.watchPositionAsync(
      {
        distanceInterval: 10, // meters
      },
      (location) => {
        dispatch({
          type: SET_USER_LOCATION,
          coords: location.coords,
          timestamp: location.timestamp,
        });
      },
    );
  };
}

// ask the user for permision to use their location
export function askUserLocationPermission() {
  return (dispatch) => {
    // ask the user for permission to use their location
    Permissions.askAsync(Permissions.LOCATION)
      .then((response) => {
        console.log('askUserLocationPermission:', response);
        dispatch({
          type: CHECK_LOCATION_COMPLETE,
          locationPermission: response.status,
        });
        if (response.status === 'granted') {
          // if the user grants access, get their current location
          watchUserLocation()(dispatch);
        } else {
          dispatch({
            type: USER_LOCATION_ERROR,
            errorMessage: 'Permission to access location was denied',
          });
          // dispatch(NavigationActions.navigate({ routeName: 'App' }));
        }
      });
  };
}

// Check and see if the user has granted us permission to use their location
export function checkLocationPermission() {
  return (dispatch) => {
    dispatch({ type: CHECK_LOCATION_START });

    if (Platform.OS === 'android' && !Constants.isDevice) {
      dispatch({
        type: USER_LOCATION_ERROR,
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      Permissions.getAsync(Permissions.LOCATION)
        .then((response) => {
          console.log('checkLocationPermission response: ', response.status);
          dispatch({
            type: CHECK_LOCATION_COMPLETE,
            locationPermission: response.status,
          });
          if (response.status === 'granted') {
            // if granted, get the user's location
            watchUserLocation()(dispatch);
          }
        });
    }
  };
}
