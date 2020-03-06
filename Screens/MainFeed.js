import React from 'react';
import { StyleSheet, View, ScrollView, Button, Text } from 'react-native';

// Local Imports

import TaskCard from '../components/Taskcard';
import Search from '../components/SearchInput';
import MonthBtn from '../components/MonthBtn';
import FilterBtn from '../components/FilterBtn';
//import AddTaskScreen from './AddTaskScreen';
// import StackNavigator from '../navigation/StackNavigator';
import BtmTabNavigator from '../navigation/BtmTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = ({ navigation }) => {
    console.log(navigation)
    return (
        <View>
            <View style={styles.body}>
                <View style={styles.header}>
                    <Search />
                    <FilterBtn />
                    <MonthBtn />
                </View>
                <ScrollView style={styles.screen}>
                    <TaskCard />
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    body: {
        height: "100%",

    },
    header: {
        padding: 12,
        marginTop: 24,
        borderBottomColor: "lightgrey",

    },
    screen: {
        paddingTop: 0,
        paddingHorizontal: 12,
        width: "100%",
    },
});

export default Home
