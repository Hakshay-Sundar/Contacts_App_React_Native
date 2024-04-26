import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabRouter from './config/TabReuter.js';

const App = () => {
    return (
        <NavigationContainer>
            <TabRouter />
        </NavigationContainer>
    );
};

export default App;