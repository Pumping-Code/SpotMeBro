import React from 'react';
import { connect } from 'react-redux';
import Profile from 'components/profile/Profile';
import * as actions from 'actions/userActions';
import { BackButton } from 'components/modules';

function ProfileContainer(props) {
  return <Profile {...props} />;
}

// ProfileContainer.navigationOptions = ({ navigation }) => ({
//   title: 'Brofile',
//   headerLeft: <BackButton onPress={() => navigation.goBack(null)} />,
// });

const mapStateToProps = state => ({
  ...state.userState,
});


export default connect(mapStateToProps, actions)(ProfileContainer);
