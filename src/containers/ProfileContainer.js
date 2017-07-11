import React from 'react';
import { connect } from 'react-redux';
import Profile from 'components/profile/Profile';
import BackButton from '../components/modules/BackButton';
import * as actions from 'actions/userActions';

const ProfileContainer = props => (
  <Profile {...props} />
);

ProfileContainer.navigationOptions = ({ navigation }) => ({
  title: 'Brofile',
  headerLeft: <BackButton onPress={() => navigation.goBack(null)} />,
});

const mapStateToProps = state => ({
  ...state.userReducer,
});


export default connect(mapStateToProps, actions)(ProfileContainer);
