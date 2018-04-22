import React from 'react';
import { connect } from 'react-redux';
import Brofile from './Brofile';
import * as actions from '../../actions/userActions';

function BrofileScreen(props) {
  return <Brofile {...props} />;
}

// ProfileContainer.navigationOptions = ({ navigation }) => ({
//   title: 'Brofile',
//   headerLeft: <BackButton onPress={() => navigation.goBack(null)} />,
// });

const mapStateToProps = state => ({
  ...state.userState,
});


export default connect(mapStateToProps, actions)(BrofileScreen);
