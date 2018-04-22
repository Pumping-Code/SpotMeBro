import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import { getUsers } from '../../actions/userActions';
import * as actions from '../../actions/locationActions';

function HomeScreen(props) {
  return <Home {...props} />;
}

const mapStateToProps = state => ({
  ...state.locationState,
});

export default connect(mapStateToProps, { ...actions, getUsers })(HomeScreen);
