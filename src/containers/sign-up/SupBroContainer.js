import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  View,
  Text,
  Picker,
  Item,
  Form,
  Button,
} from 'native-base';
import { editUserField } from 'actions/userActions';
import styles from 'styles';

function SupBroContainer(props) {
  console.log(props);
  return (
    <Container>
      <Content>
        <View style={[styles.container, styles.alignCenter]}>
          <View>
            <Text>Sup, Bro. Tell us about yourself.</Text>
          </View>
          <Form>
            <Text>What is your height and weight?</Text>
            <View>
              <Picker
                selectedValue={props.signUp.heightFeet}
                onValueChange={value => props.editUserField('heightFeet', value)}
              >
                <Item label="Feet" value="" />
                <Item label="1" value="1" />
                <Item label="2" value="2" />
                <Item label="3" value="3" />
                <Item label="4" value="4" />
                <Item label="5" value="5" />
                <Item label="6" value="6" />
                <Item label="7" value="7" />
              </Picker>
              <Picker
                selectedValue={props.signUp.heightInches}
                onValueChange={value => props.editUserField('heightInches', value)}
              >
                <Item label="Inches" value="" />
                <Item label="0" value="0" />
                <Item label="1" value="1" />
                <Item label="2" value="2" />
                <Item label="3" value="3" />
                <Item label="4" value="4" />
                <Item label="5" value="5" />
                <Item label="6" value="6" />
                <Item label="7" value="7" />
                <Item label="8" value="8" />
                <Item label="9" value="9" />
                <Item label="10" value="10" />
                <Item label="11" value="11" />
              </Picker>
            </View>
            <Button
              onPress={() => props.navigation.navigate('HowBro')}
            >
              <Text>Next</Text>
            </Button>
          </Form>
        </View>
      </Content>
    </Container>
  );
}

SupBroContainer.navigationOptions = {
  header: null,
};

SupBroContainer.propTypes = {
  user: PropTypes.shape({
    heightFeet: PropTypes.string,
    heightInches: PropTypes.string,
  }).isRequired,
  editUserField: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ ...state.userState });

export default connect(mapStateToProps, { editUserField })(SupBroContainer);
