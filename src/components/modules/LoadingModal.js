import React from 'react';
import { Modal, View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loadingModal: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    marginTop: 22,
  },
});

const LoadingModal = ({ fetching, opacity, flavorText, animationType }) => (
  <Modal
    animationType={animationType}
    transparent
    visible={fetching}
  >
    <View style={[styles.loadingModal, { opacity }]}>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Text style={{ color: '#FFF' }}>{flavorText}</Text>
      </View>
      <ActivityIndicator
        animating
        color={'#FFF'}
        size={'large'}
        style={{ flex: 1, justifyContent: 'flex-start' }}
      />
    </View>
  </Modal>
  );

LoadingModal.defaultProps = {
  opacity: 0.5,
  flavorText: 'Loading...',
  animationType: 'none',
};

export default LoadingModal;
