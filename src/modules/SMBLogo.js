import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import TextSMB from './TextSMB';
import { blueGrey, darkGrey, lightGreen } from '../styles';

const logoStyles = StyleSheet.create({
  smallText: {
    fontSize: 25,
    color: darkGrey,
    textAlign: 'center',
  },
});

function SMBLogo() {
  return (
    <View>
        <TextSMB style={{ textAlign: 'center', fontSize: 35, color: darkGrey }}>
          SPOT ME
        </TextSMB>
        <View
          style={{
            alignSelf: 'center',
            height: 5,
            width: 112,
            backgroundColor: lightGreen,
          }}
        />
        <TextSMB style={{ textAlign: 'center', fontSize: 81, color: blueGrey }}>
          BRO
        </TextSMB>
    </View>
  );
}

export default SMBLogo;
