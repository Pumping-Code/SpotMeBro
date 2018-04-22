import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';

export default async function smbPush() {
  const previousToken = await AsyncStorage.getItem('pushtoken');
  console.log('previousToken', previousToken);
  if (previousToken) {
    return previousToken;
  }

  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  console.log('status', status);
  if (status !== 'granted') {
    return undefined;
  }

  const token = await Notifications.getExpoPushTokenAsync();
  console.log('token', token);
  AsyncStorage.setItem('pushtoken', token);

  return token;
}
