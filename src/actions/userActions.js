import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import axios from 'axios';

const smbAPI = 'https://spot-me-bro-server.herokuapp.com/users';

export const FACEBOOK_LOGIN_START = 'FACEBOOK_LOGIN_START';
export const SET_USER_TO_STATE = 'SET_USER_TO_STATE';
export const FACEBOOK_LOGIN_ERROR = 'FACEBOOK_LOGIN_ERROR';

export const facebookLogin = () => {
	return (dispatch) => {
		// set loading true
		dispatch({ type: FACEBOOK_LOGIN_START });

		AsyncStorage.getItem('fb_token')
		.then(token => {
			if (token === null) {
				Facebook.logInWithReadPermissionsAsync('667138290125485', { 
					permissions: ['public_profile'],
				})
				.then((resToken) => {
					AsyncStorage.setItem('fb_token', resToken.token)
					queryFacebookAPI(resToken.token)(dispatch);
				})
				.catch((error) => {
					console.log(error);
					dispatch({
						type: FACEBOOK_LOGIN_ERROR,
						error,
					})
				});
			} else {
				queryFacebookAPI(token)(dispatch);
			}
		})
	}
}

export const queryFacebookAPI = (token) => {
	return (dispatch) => {
		axios(`https://graph.facebook.com/me?access_token=${token}`)
			.then(resUser => {
				const user = resUser.data;
				console.log('user', user)
				//Send user data to Spot Me Bro API
				axios.post(smbAPI, user)
					.then(response => {
						console.log('user form api',response)
						dispatch({
							type: SET_USER_TO_STATE,
							user: response.data[0]
						})
					})
					.catch(error => {
						console.log(error)
							dispatch({
							type: FACEBOOK_LOGIN_ERROR,
							error,
						})
					});
			})
			.catch(error => {
				console.log(error)
					dispatch({
					type: FACEBOOK_LOGIN_ERROR,
					error,
				})
			});
	}
}
