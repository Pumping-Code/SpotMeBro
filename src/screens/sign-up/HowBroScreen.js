import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, Text, View, Picker } from 'native-base';
import { editUserField } from 'actions/userActions';
import styles from 'styles';

function HowBroScreen(props) {
  return (
    <Container>
      <Content>
        <View style={[styles.container, styles.alignCenter]}>
          <Text>On a scale of 1 to Rob Gronkowski, how Bro are you?</Text>
          <Picker
            selectedValue={props.signUp.howBro}
            onValueChange={value => props.editUserField('howBro', value)}
          />
        </View>
      </Content>
    </Container>
  );
}

HowBroScreen.navigationOptions = {
  header: null,
};

HowBroScreen.propTypes = {
  user: PropTypes.shape({
    howBro: PropTypes.string,
  }).isRequired,
  editUserField: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ ...state.userState });

export default connect(mapStateToProps, { editUserField })(HowBroScreen);
