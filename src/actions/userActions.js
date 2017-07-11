import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import axios from 'axios';
import { NavigationActions } from 'react-navigation';

import smbApi from 'services/api';
import smbAuth from 'services/auth';

export const FACEBOOK_LOGIN_START = 'FACEBOOK_LOGIN_START';
export const SET_USER_TO_STATE = 'SET_USER_TO_STATE';
export const FACEBOOK_LOGIN_ERROR = 'FACEBOOK_LOGIN_ERROR';
export const LOG_USER_OUT = 'LOG_USER_OUT';


// Query the Facebook Graph API with the user access token
export const queryFacebookAPI = token => (dispatch) => {
  axios(`https://graph.facebook.com/me?access_token=${token}`)
  .then((resUser) => {
    const user = resUser.data;
    console.log('user from Facebook: ', user);
    // Send user data to Spot Me Bro API
    axios.post(smbAPI, user)
    .then((response) => {
      console.log('user from api: ', response);
      dispatch({
        type: SET_USER_TO_STATE,
        user: response.data[0],
      });
     // Send the user to the Home screen
      dispatch(NavigationActions.navigate({ routeName: 'Home' }));
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FACEBOOK_LOGIN_ERROR,
        error,
      });
    });
  })
  .catch((error) => {
    console.log(error);
    dispatch({
      type: FACEBOOK_LOGIN_ERROR,
      error,
    });
  });
};

export const checkForToken = () => (dispatch) => {
  AsyncStorage.getItem('fb_token')
  .then((token) => {
    if (token === null) {
      // send user the login screen
      dispatch(NavigationActions.navigate({ routeName: 'Auth' }));
    } else {
      queryFacebookAPI(token)(dispatch);
    }
  })
  .catch((error) => {
    console.log(error);
    // send user the login screen
    dispatch(NavigationActions.navigate({ routeName: 'Auth' }));
  });
};

// Get the user access token from Facebook
export const facebookLogin = () => (dispatch) => {
  // set loading true
  dispatch({ type: FACEBOOK_LOGIN_START });

  Facebook.logInWithReadPermissionsAsync('667138290125485', {
    permissions: ['public_profile'],
  })
  .then((response) => {
    if (response.type === 'cancel') {
      console.log('~~~~~~', response);
      dispatch({
        type: FACEBOOK_LOGIN_ERROR,
        error: response,
      });
    } else {
      console.log('~~~~~~', response);
      AsyncStorage.setItem('fb_token', response.token);
      queryFacebookAPI(response.token)(dispatch);
    }
  })
  .catch((error) => {
    console.log(error);
    dispatch({
      type: FACEBOOK_LOGIN_ERROR,
      error,
    });
  });
};

export const logOut = () => (dispatch) => {
  dispatch({ type: LOG_USER_OUT });
  AsyncStorage.removeItem('fb_token')
  .then(() => dispatch(NavigationActions.navigate({ routeName: 'Auth' })));
};
