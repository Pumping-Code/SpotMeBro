import React from 'react';
import { connect } from 'react-redux';
import BroMap from 'components/bro-map/BroMap';
import * as actions from 'actions/locationActions';

const BroMapContainer = props => (
  <BroMap {...props} />
);

BroMapContainer.navigationOptions = () => ({
  title: 'Bro Map',
  headerLeft: null,
});

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(BroMapContainer);
