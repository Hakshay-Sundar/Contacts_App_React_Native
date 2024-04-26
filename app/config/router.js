import { createStackNavigator } from '@react-navigation/stack';
import { capitalizeFirstLetter } from '../helpers/string';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';

const Stack1 = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();

export const NewContactStack = () => {
    return (
        <Stack3.Navigator initialRouteName='New Contact'>
            <Stack3.Screen name="New Contact" component={NewContact} />
        </Stack3.Navigator>
    );
};

export const MeStack = () => {
    return (
        <Stack2.Navigator initialRouteName='Me'>
            <Stack2.Screen name="Me" component={Me} />
        </Stack2.Navigator>
    );
};

export const ContactsStack = () => {
    return (
        <Stack1.Navigator initialRouteName='Contacts'>
            <Stack1.Screen name="Contacts" component={Contacts} />
            <Stack1.Screen 
                name="Details" 
                component={Details} 
                options={({route}) => ({title: `${capitalizeFirstLetter(route.params.name.first)} ${capitalizeFirstLetter(route.params.name.last)}`})}
            />
        </Stack1.Navigator>
    );

}