import React from 'react';
import { connect } from 'react-redux';
import Home from 'components/home/Home';
import { getUsers } from 'actions/userActions';
import * as actions from 'actions/locationActions';

function HomeContainer(props) {
  return <Home {...props} />;
}

HomeContainer.navigationOptions = () => ({
  title: 'Spot Me Bro',
  headerLeft: null,
});

const mapStateToProps = state => ({
  ...state.locationState,
});

export default connect(mapStateToProps, { ...actions, getUsers })(HomeContainer);