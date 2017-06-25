import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/home/Home';

const HomeContainer = props => (
  <Home {...props} />
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(HomeContainer);
