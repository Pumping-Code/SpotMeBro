import React from 'react';
import { Text, Container, Button, Content } from 'native-base';
import { Dimensions } from 'react-native';
import ScaledImage from '../modules/ScaledImage';
import styles from 'styles';

function Profile(props) {
  return (
    <Container>
      <Content>
        <ScaledImage
          uri={props.user.profilePic}
          width={Dimensions.get('window').width}
        />
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
}

export default Profile;
