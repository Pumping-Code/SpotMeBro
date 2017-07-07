import React from 'react';
import { connect } from 'react-redux';
import Profile from 'components/profile/Profile';
import * as actions from 'actions/userActions';

const ProfileContainer = props => (
  <Profile {...props} />
);

const mapStateToProps = state => ({
  ...state.userReducer,
});

export default connect(mapStateToProps, actions)(ProfileContainer);
