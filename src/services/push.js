import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';

export default async function smbPush() {
  const previousToken = await AsyncStorage.getItem('pushtoken');

  if (previousToken) {
    return previousToken;
  }

  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  if (status !== 'granted') {
    return undefined;
  }

  const token = await Notifications.getExpoPushTokenAsync();

  AsyncStorage.setItem('pushtoken', token);

  return token;
}
