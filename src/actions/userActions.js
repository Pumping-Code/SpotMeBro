import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import axios from 'axios';
import { NavigationActions } from 'react-navigation';

import smbApi from 'services/api';
import smbAuth from 'services/auth';
import smbPush from 'services/push';

// Authentication action types
export const CHECK_ASYNCSTORAGE_FOR_TOKEN = 'CHECK_ASYNCSTORAGE_FOR_TOKEN';
export const NO_ASYNCSTORAGE_TOKEN_FOUND = 'NO_ASYNCSTORAGE_TOKEN_FOUND';
export const FACEBOOK_LOGIN_START = 'FACEBOOK_LOGIN_START';
export const SET_USER_TO_STATE = 'SET_USER_TO_STATE';
export const FACEBOOK_LOGIN_ERROR = 'FACEBOOK_LOGIN_ERROR';
export const LOG_USER_OUT = 'LOG_USER_OUT';

// Users action types
export const GET_USERS_START = 'GET_USERS_START';
export const SET_USERS_TO_STATE = 'SET_USERS_TO_STATE';
export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';

export const getUsers = () => (dispatch) => {
  // set loading state to true
  dispatch({ type: GET_USERS_START });

  smbApi({ method: 'GET', route: '/locations' })
    .then((response) => {
      console.log('users', response.data);
      dispatch({
        type: SET_USERS_TO_STATE,
        users: response.data,
      });
    });
};

// Query the Facebook Graph API with the user access token
export const queryFacebookAPI = token => (dispatch) => {
  axios(`https://graph.facebook.com/me?fields=id,name,picture.width(400)&access_token=${token}`)
    .then((resUser) => {
      const user = resUser.data;
      const profilePic = user.picture.data.url;
      console.log('user from Facebook: ', user);
      // Sets the unique FB id onto our auth service object
      smbAuth.id = user.id;

      smbPush()
        .then((pushToken) => {
          console.log('pushToken', pushToken);
          user.pushToken = pushToken;
          // Send user data to Spot Me Bro API
          smbApi({
            method: 'POST',
            route: '/auth',
            data: user,
          })
            .then((response) => {
              console.log('jwt from api: ', response);
              // set json web token to auth service object
              smbAuth.jwt = response.data.jwt;
              AsyncStorage.setItem('jwt', response.data.jwt);
              // Add profilePic url to user object
              response.data.profilePic = profilePic;
              dispatch({
                type: SET_USER_TO_STATE,
                user: response.data,
              });

              if (response.data.signupComplete) {
                // Send the user to the Home screen
                dispatch(NavigationActions.navigate({ routeName: 'Home' }));
              } else {
                // Send the user to the sign up flow
                dispatch(NavigationActions.navigate({ routeName: 'SignUp' }));
              }
            })
            .catch((error) => {
              console.log('login error:', error);
              dispatch({
                type: FACEBOOK_LOGIN_ERROR,
                error,
              });
            });
        });
    })
    .catch((error) => {
      console.log('error', error);
      dispatch({
        type: FACEBOOK_LOGIN_ERROR,
        error,
      });
      if (error.response.data.error.code === 190) {
        AsyncStorage.removeItem('fb_token')
          .then(() => {
            dispatch(NavigationActions.navigate({ routeName: 'Auth' }));
          });
      }
    });
};

export const checkForToken = () => (dispatch) => {
  dispatch({ type: CHECK_ASYNCSTORAGE_FOR_TOKEN });
  AsyncStorage.getItem('fb_token')
    .then((token) => {
      console.log('fb_token: ', token);
      if (token !== null) {
        queryFacebookAPI(token)(dispatch);
      } else {
        dispatch({ type: NO_ASYNCSTORAGE_TOKEN_FOUND });
      }
      // else {
      //   // send user the login screen
      //   // dispatch(NavigationActions.navigate({ routeName: 'Auth' }));
      // }
    })
    .catch((error) => {
      console.log('Error checking AsyncStorage for fb_token: ', error);
      // send user the login screen
      // dispatch(NavigationActions.navigate({ routeName: 'Auth' }));
    });
};

// Get the user access token from Facebook
export const facebookLogin = () => (dispatch) => {
  // set loading true
  dispatch({ type: FACEBOOK_LOGIN_START });

  Facebook.logInWithReadPermissionsAsync('667138290125485', {
    permissions: ['public_profile', 'email'],
  })
    .then((response) => {
      if (response.type === 'cancel') {
        dispatch({
          type: FACEBOOK_LOGIN_ERROR,
          error: response,
        });
      } else {
        AsyncStorage.setItem('fb_token', response.token);
        queryFacebookAPI(response.token)(dispatch);
      }
    })
    .catch((error) => {
      console.log('error', error);
      dispatch({
        type: FACEBOOK_LOGIN_ERROR,
        error,
      });
    });
};

export const logOut = () => (dispatch) => {
  dispatch({ type: LOG_USER_OUT });
  AsyncStorage.removeItem('fb_token')
    .then(() => {
      dispatch(NavigationActions.navigate({ routeName: 'Loading' }));
    });
};

export function editUserField(field, value) {
  return (dispatch) => {
    console.log(value);
    dispatch({
      type: CHANGE_USER_FIELD,
      field,
      value,
    });
  };
}
