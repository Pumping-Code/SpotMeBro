import React from 'react';
import { connect } from 'react-redux';
import BroMap from 'components/bro-map/BroMap';
import * as actions from 'actions/locationActions';

function BroMapContainer(props) {
  return <BroMap {...props} />;
}

const mapStateToProps = state => ({
  ...state.locationState,
});

export default connect(mapStateToProps, actions)(BroMapContainer);
