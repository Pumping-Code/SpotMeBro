import React from 'react';
import { connect } from 'react-redux';
import Auth from 'components/auth/Auth';
import * as actions from 'actions/userActions';

function AuthContainer(props) {
  return <Auth {...props} />;
}

AuthContainer.navigationOptions = () => ({
  title: 'Login',
  headerLeft: null,
});

const mapStateToProps = state => ({
  ...state.userReducer,
});

export default connect(mapStateToProps, actions)(AuthContainer);
