import React from 'react';
import PropTypes from 'prop-types';
import { Text, Container, Button, Content } from 'native-base';
import { LoadingModal } from 'components/modules';

function Auth(props) {
  return (
    <Container>
      <Content style={{ marginTop: 100, backgroundColor: 'white' }}>
        <LoadingModal fetching={false} />
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

Auth.propTypes = {
  // loading: PropTypes.bool.isRequired,
  facebookLogin: PropTypes.func.isRequired,
};

export default Auth;
