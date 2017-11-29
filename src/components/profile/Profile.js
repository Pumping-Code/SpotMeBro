import React from 'react';
import { Text, Container, Button, Content } from 'native-base';
import { View } from 'react-native';
import styles from 'styles';

function Profile(props) {
  return (
    <Container>
      <Content>
        <View style={[styles.container, styles.alignCenter]}>
          {
        props.user.username ?
          <Text>Hello, {props.user.username}!</Text>
          : null
      }
          <Button
            full
            onPress={props.logOut}
          >
            <Text>Log Out</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

export default Profile;
