import React from 'react';
import { Text } from 'react-native';
import { Container, Button, Content, Footer, FooterTab } from 'native-base';
import LoadingModal from '../modules/LoadingModal';

class Auth extends React.Component {
  render() {
    const props = this.props;
    return (
      <Container>
        <Content style={{ marginTop: 100, backgroundColor: 'white' }}>
          <LoadingModal fetching={props.loading} />
          <Button
            full
            onPress={props.facebookLogin}
          >
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Auth;
