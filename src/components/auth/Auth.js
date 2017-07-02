import React from 'react';
import { Text } from 'react-native';
import { Container, Button, Content, Footer, FooterTab } from 'native-base';

class Auth extends React.Component {
  componentDidMount() {
    this.props.facebookLogin();
  }

  render() {
    const props = this.props;
    return (
      <Container>
        <Content style={{ marginTop: 100 }}>
          {
            props.userState.user.username ?
              <Text>Hello, {props.userState.user.username}!</Text>
              :
              <Button
                full
                onPress={props.facebookLogin}
              >
                <Text>Login</Text>
              </Button>
          }
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Auth;
