import React from 'react';
import { Modal, View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import TextSMB from './TextSMB';
import { offWhite, blueGrey } from '../../styles/index';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  loadingModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },
});

function LoadingModal(props) {
  const {
    fetching,
    opacity,
    flavorText,
    animationType,
    backgroundColor,
    textColor,
    activityIndicatorColor,
    fontSize,
    transparent,
  } = props;
  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      visible={fetching}
    >
      <View style={[styles.loadingModal]}>
        <View style={{ zIndex: 3 }}>
          <TextSMB
            style={{ color: textColor, fontSize, marginBottom: 10 }}
          >
            {flavorText}
          </TextSMB>
          <ActivityIndicator
            color={activityIndicatorColor}
            size="large"
          />
        </View>
        <View
          style={{
            position: 'absolute',
            height,
            width,
            opacity,
            backgroundColor,
            zIndex: 2,
          }}
        />
      </View>
    </Modal>
  );
}

LoadingModal.defaultProps = {
  opacity: 0.5,
  flavorText: 'Loading...',
  animationType: 'none',
  transparent: true,
  backgroundColor: offWhite,
  textColor: blueGrey,
  activityIndicatorColor: blueGrey,
  fontSize: 25,
};

export default LoadingModal;
