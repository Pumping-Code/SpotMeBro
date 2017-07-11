import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { Container, Button, Content } from 'native-base';
import LoadingModal from '../modules/LoadingModal';

const Auth = props => (
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

Auth.propTypes = {
  loading: PropTypes.bool.isRequired,
  facebookLogin: PropTypes.func.isRequired,
};

export default Auth;
