import React from 'react';
import { connect } from 'react-redux';
import BroMap from 'components/bro-map/BroMap';
import * as actions from 'actions/locationActions';
import { BackButton } from 'components/modules';

function BroMapContainer(props) {
  return <BroMap {...props} />;
}

BroMapContainer.navigationOptions = ({ navigation }) => ({
  title: 'Bro Map',
  headerLeft: <BackButton onPress={() => navigation.goBack(null)} />,
});

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(BroMapContainer);
