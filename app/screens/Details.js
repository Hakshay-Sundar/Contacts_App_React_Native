import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { Action } from '../components/Actions';
import { toPhoneNumber } from '../helpers/string';
import moment from 'moment';

class Details extends Component {
    render() {
        const item = this.props.route.params;
        return (
            <ScrollView style={{backgroundColor: 'white'}}>
                <Header {...item} />
                <View style={{backgroundColor: '#f1f1f1', paddingVertical:5}}>
                    <Action label={'Email'} text={item.email} iconNames={['mail-outline']} />
                    <Action label={'Cell'} text={toPhoneNumber(item.cell).toString()} iconNames={['document-text-outline', 'call-outline']} />
                    <Action label={'Phone'} text={toPhoneNumber(item.phone).toString()} iconNames={['call-outline']} />
                </View>
                <Action label={'City'} text={item.location.city} iconNames={[]} />
                <Action label={'Birthday'} text={moment(item.dob).format('MMMM Do, YYYY')} iconNames={[]} />
                <Action label={'Registered'} text={moment(item.registered).format('MMMM Do, YYYY')} iconNames={[]} />
                <Action label={'Username'} text={item.login.username} iconNames={[]} />
            </ScrollView>
        );
    }
}

export default Details;