import React, { Component } from 'react';
import { View, ScrollView, Button } from 'react-native';
import { Header } from '../components/Header';
import { Action } from '../components/Actions';
import { toPhoneNumber } from '../helpers/string';
import { me } from "../config/data";
import moment from 'moment';

class Me extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Header {...me} />
        <View style={{ backgroundColor: 'blue', padding: 5, width: 200, justifyContent: 'center', alignSelf:'center', flex:1 , marginVertical:10}}>
          <Button color="white" title={'Edit Profile'} onPress={() => console.log(me)} />
        </View>
        <View style={{ backgroundColor: '#f1f1f1', paddingVertical: 5 }}>
          <Action label={'Email'} text={me.email} iconNames={['mail-outline']} />
          <Action label={'Cell'} text={toPhoneNumber(me.cell).toString()} iconNames={['document-text-outline', 'call-outline']} />
          <Action label={'Phone'} text={toPhoneNumber(me.phone).toString()} iconNames={['call-outline']} />
        </View>
        <Action label={'City'} text={me.location.city} iconNames={[]} />
        <Action label={'Birthday'} text={moment(me.dob).format('MMMM Do, YYYY')} iconNames={[]} />
        <Action label={'Registered'} text={moment(me.registered).format('MMMM Do, YYYY')} iconNames={[]} />
        <Action label={'Username'} text={me.login.username} iconNames={[]} />
      </ScrollView>
    );
  }
}

export default Me;