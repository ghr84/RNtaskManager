import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';

// Navigation

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Local imports

import AddTaskScreen from '../Screens/AddTaskScreen';
import StackNavigator from './StackNavigator';
import MainFeed from '../Screens/MainFeed';
import Tasks from '../Screens/Tasks';
import Alerts from '../Screens/Alerts';
import Settings from '../Screens/Settings';


function AppNavigation({ }) {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="To Do"
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="To Do"
                component={MainFeed}
                options={{
                    tabBarLabel: 'To Do',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-clipboard" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Tasks"
                component={Tasks}
                options={{
                    tabBarLabel: 'Tasks',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="folderopen" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="StackNavigator"
                component={StackNavigator}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => (
                        // <View style={styles.addBtn} onPress={() => navigation.navigate('AddStackModal')}>
                        <View style={styles.addBtn}>
                            <Feather name="plus" color={"white"} size={30} />
                        </View>
                        // <Button title="adf" onPress={() => {
                        //     navigation.navigate('StackNavigator')
                        // }} />

                    ),
                }}
            />
            <Tab.Screen
                name="Alerts"
                component={Alerts}
                options={{
                    tabBarLabel: 'Alerts',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-notifications-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="settings" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}






const styles = StyleSheet.create({
    addBtn: {
        position: "absolute",
        top: -23,
        alignItems: "center",
        justifyContent: "center",
        height: 68,
        width: 68,
        borderRadius: 100,
        backgroundColor: "#1F51D1",
        shadowColor: "#1F51D1",
        shadowOffset: { width: 0, height: 7 },
        shadowRadius: 6,
        shadowOpacity: 0.4

    }
})

export default AppNavigation;

