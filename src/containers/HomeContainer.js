import React from 'react';
import { connect } from 'react-redux';
import Home from 'components/home/Home';
import { getUsers } from 'actions/userActions';

const HomeContainer = props => (
  <Home {...props} />
);

HomeContainer.navigationOptions = () => ({
  title: 'Spot Me Bro',
  headerLeft: null,
});

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getUsers })(HomeContainer);
