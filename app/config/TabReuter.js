import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContactsStack, NewContactStack, MeStack } from './router.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabRouter = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Contacts" component={ContactsStack} options={{tabBarIcon: ({color, size}) => (
                <Ionicons name="list-outline" color={color} size={size} />
            )}}/>
            <Tab.Screen name="New Contact" component={NewContactStack} options={{tabBarIcon: ({color, size}) => (
                <Ionicons name="add-outline" color={color} size={size} />
            )}}/>
            <Tab.Screen name="Me" component={MeStack} options={{tabBarIcon: ({color, size}) => (
                <Ionicons name="person-circle-outline" color={color} size={size} />
            )}}/>
        </Tab.Navigator>
    );
}

export default TabRouter;