import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { Text, Spinner } from 'native-base';

const styles = StyleSheet.create({
  loadingModal: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    marginTop: 22,
  },
});

function LoadingModal(props) {
  const {
    fetching,
    opacity,
    flavorText,
    animationType,
  } = props;
  return (
    <Modal
      animationType={animationType}
      transparent
      visible={fetching}
    >
      <View style={[styles.loadingModal, { opacity }]}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ color: '#FFF' }}>{flavorText}</Text>
          <Spinner
            color="#FFF"
          />
        </View>
      </View>
    </Modal>
  );
}

LoadingModal.defaultProps = {
  opacity: 0.5,
  flavorText: 'Loading...',
  animationType: 'none',
};

export default LoadingModal;
