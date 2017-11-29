import React from 'react';
import { connect } from 'react-redux';
import Splash from 'components/splash/Splash';
import * as actions from 'actions/userActions';

function SplashContainer(props) {
  return <Splash {...props} />;
}

SplashContainer.navigationOptions = {
  header: null,
};

const mapStateToProps = state => ({
  ...state.userReducer,
});

export default connect(mapStateToProps, actions)(SplashContainer);
