import React from 'react';
import { Text } from 'react-native';
import { Container, Button, Content, Footer, FooterTab } from 'native-base';

const Profile = (props) => (
  <Container>
    <Content style={{ marginTop: 100 }}>
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
    </Content>
  </Container>
);

export default Profile;
