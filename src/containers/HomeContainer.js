import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const HomeContainer = (props) => (
	<View style={styles.container}>
		<Text>Spot Me Bro</Text>
	</View>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(HomeContainer);
