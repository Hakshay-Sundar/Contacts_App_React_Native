import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { CustomTextInput } from '../components/TextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const fields = [
  { 'placeholder': 'First Name', 'stateKey': 'firstName' },
  { 'placeholder': 'Last Name', 'stateKey': 'lastName' },
  { 'placeholder': 'Email', 'stateKey': 'email', 'keyboardType': 'email-address' },
  { 'placeholder': 'Mobile Phone', 'stateKey': 'mobilePhone' },
  { 'placeholder': 'Home Phone', 'stateKey': 'homePhone' },
  { 'placeholder': 'City', 'stateKey': 'city' },
  { 'placeholder': 'Birthday (MM-DD-YYYY)', 'stateKey': 'birthday' },
  { 'placeholder': 'Registered (MM-DD-YYYY)', 'stateKey': 'registered' },
  { 'placeholder': 'Username', 'stateKey': 'username' },
]

class NewContact extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  onChangeText = (text, stateKey) => {
    const mod = {};
    mod[stateKey] = text;
    this.setState(mod);
  };

  handleSubmitEditing = (index) => {
    if (index === fields.length - 1) {
      return;
    }

    const nextField = fields[index + 1];
    this[nextField.stateKey].focus();
  }

  render() {
    return (
      <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
        {
          fields.map((field, index) => {
            return (
              <CustomTextInput
                key={field.stateKey}
                onChangeText={(text) => this.onChangeText(text, field.stateKey)}
                returnKeyType={index === fields.length - 1 ? 'done' : 'next'}
                onSubmitEditing={() => {
                  this.handleSubmitEditing(index);
                }}
                ref={(input) => {
                  this[field.stateKey] = input;
                }}
                {...field}
              />
            );
          })
        }
        <View style={{ backgroundColor: 'blue', padding: 5, width: 200, justifyContent: 'center', alignSelf: 'center', flex: 1, marginVertical: 10 }} >
          <Button color="white" title={'Save Contact'} onPress={() => {
            console.log(this.state)
            if (this.state == null || this.state.firstName == null || this.state.lastName == null) {
              alert('First Name and Last Name are required!')
              return
            } else {
              alert('Contact Saved!')
            }
          }} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default NewContact;