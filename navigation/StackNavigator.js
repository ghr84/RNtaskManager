import React from 'react';

// Navigation

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Local Imports

import AddTaskScreen from '../Screens/AddTaskScreen';
// import BtmTabNavigator from './BtmTabNavigator';
import MainFeed from '../Screens/MainFeed'


const Stack = createStackNavigator();

function MyStack() {
    return (

        <Stack.Navigator initialRouteName="AddTaskScreen"
            screenOptions={{ gestureEnabled: true }}>
            <Stack.Screen name="MainFeed" component={MainFeed} />
            <Stack.Screen
                name="AddTaskScreen"
                component={AddTaskScreen}
                options={{ title: 'Add a task', headerShown: true, headerMode: "float" }}
            />
        </Stack.Navigator>

    );
}

export default MyStack
