import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

export const facebookLogin = () => {
	return (dispath) => {
		AsyncStorage.getItem('fb_token')
		.then(token => {
			if (token === null) {
				Facebook.logInWithReadPermissionsAsync('667138290125485', { 
					permissions: ['public_profile'],
				})
				.then(res => {
					console.log('token: ', res.token)
					fetch(`https://graph.facebook.com/me?access_token=${res.token}`)
					.then(response => {
						console.log('fb user: ', response);
					});
				});
			} 
		})
	}
}
