import React from 'react';
import { Button } from 'native-base';
import { Dimensions, View } from 'react-native';
import ScaledImage from '../../modules/ScaledImage';
import TextSMB from '../../modules/TextSMB';
import styles, { buttonStyles } from '../../styles/index';

function Brofile(props) {
  return (
    <View>
      <ScaledImage
        uri={props.user.profilePic}
        width={Dimensions.get('window').width}
      />
      {
        props.user.username ?
          <TextSMB>Sup, {props.user.username}!</TextSMB>
          : null
      }
      <Button
        full
        style={buttonStyles.secondary}
        onPress={props.logOut}
      >
        <TextSMB>Log Out</TextSMB>
      </Button>
    </View>
  );
}

export default Brofile;
