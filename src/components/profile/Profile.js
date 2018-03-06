import React from 'react';
import { Container, Button, Content } from 'native-base';
import { Dimensions } from 'react-native';
import ScaledImage from '../modules/ScaledImage';
import TextSMB from '../modules/TextSMB';
import styles, { buttonStyles } from 'styles';

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
            <TextSMB>Sup, {props.user.username}!</TextSMB>
            : null
        }
        <Button
          full
          style={buttonStyles.secondary}
          onPress={props.logOut}
        >
          <TextSMB>Log Out</TextSMB>
        </Button>
      </Content>
    </Container>
  );
}

export default Profile;
