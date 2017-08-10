import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';

export default async () => {
  const previousToken = await AsyncStorage.getItem('pushtoken');

  if (previousToken) { return; }

  const { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

  if (status !== 'granted') { return; }

  const token = await Notifications.getExponentPushTokenAsync();

  AsyncStorage.setItem('pushtoken', token);

  return token;
};
