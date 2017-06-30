import React from 'react';
import { Text } from 'react-native';
import { Container, Button, Content, Footer, FooterTab } from 'native-base';

class Auth extends React.Component {
  componentDidMount() {
    fetch('https://spot-me-bro-server.herokuapp.com/users')
      .then(response => {
        console.log('users',response)
      })
  }
  render() {
    const props = this.props
    return (
    <Container>
        <Content>
          <Button 
            full 
            onPress={props.facebookLogin}
            style={{ marginTop: 100 }}
            >
            <Text>Login</Text>
          </Button>
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

