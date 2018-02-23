import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';
import { Button } from 'native-base';
import { LoadingModal } from '../components/modules';
import * as actions from '../actions/userActions';
import styles, { offset, buttonStyles } from '../styles/index';

const { height } = Dimensions.get('window');

function AuthContainer(props) {
  return (
    <View
      style={[
        styles.container,
        styles.justifyCenter,
        { },
      ]}
    >
      <View style={{ height: height - offset }}>
        <LoadingModal fetching={false} />
        <Button
          style={buttonStyles.primary}
          full
          onPress={props.facebookLogin}
        >
          <Text style={buttonStyles.primaryText}>Login with Facebook</Text>
        </Button>
        <Button
          style={buttonStyles.secondary}
          full
          onPress={props.facebookLogin}
        >
          <Text style={buttonStyles.secondaryText}>Sign up with Facebook</Text>
        </Button>
      </View>
    </View>
  );
}

AuthContainer.navigationOptions = () => ({
  title: 'Login',
  headerLeft: null,
});

const mapStateToProps = state => ({
  ...state.userReducer,
});

export default connect(mapStateToProps, actions)(AuthContainer);
