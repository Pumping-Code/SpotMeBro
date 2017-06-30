import React, { Component } from 'react';
import { Platform, Text } from 'react-native';
import { connect } from 'react-redux';
import { Constants, Location, Permissions } from 'expo';
import { Container, Content, Footer, FooterTab, Button } from 'native-base';
import { bindActionCreators } from 'redux';

import { locationGet } from '../../actions';

import SpotMe from '../spot-me/SpotMe';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      errorMessage: null,
    };
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this.getLocationAsync();
    }
  }

  async getLocationAsync() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    await Location.watchPositionAsync({
      distanceInterval: 1,
    }, (location) => {
      this.setState({ location });
      this.props.locationGet({ location });
    });
  }

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      <Container>
        <Content>
          <Text>{text}</Text>
          <SpotMe />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ locationGet }, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);