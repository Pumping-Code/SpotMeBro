import React from 'react';
import { Modal, View, StyleSheet, ActivityIndicator } from 'react-native';
import TextSMB from './TextSMB';
import { offWhite, blueGrey } from '../../styles/index';

const styles = StyleSheet.create({
  loadingModal: {
    backgroundColor: offWhite,
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
          <TextSMB
            style={{ color: blueGrey, fontSize: 25, marginBottom: 10 }}
          >
            {flavorText}
          </TextSMB>
          <ActivityIndicator
            color={blueGrey}
            size="large"
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
