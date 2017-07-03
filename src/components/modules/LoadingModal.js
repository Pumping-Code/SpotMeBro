import React from 'react';
import { Modal, View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loadingModal: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    marginTop: 22,
  },
})

const LoadingModal = ({ fetching, opacity, flavorText }) => {
  return (
    <Modal
      animationType={'none'}
      transparent={true}
      visible={fetching}
    >
      <View style={[styles.loadingModal, { opacity: opacity }]}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Text style={{ color: '#FFF' }}>{flavorText}</Text>
        </View>
        <ActivityIndicator 
          animating={true}
          color={'#FFF'}
          size={'large'}
          style={{ flex: 1,justifyContent: 'flex-start' }}
        />
      </View>
    </Modal>
  )
}

LoadingModal.defautlProps = {
  opacity: 0.2,
  flavorText: 'Loading...',
};

export default LoadingModal