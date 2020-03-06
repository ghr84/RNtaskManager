import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Local Imports

import BtmTabNavigator from './navigation/BtmTabNavigator'
// import MainFeed from './Screens/MainFeed';
import StackNavigator from './navigation/StackNavigator';

// Núverandi flæði: BottomNavigation (+) takki renderar fyrsta skjá í StackNavigator (AddTaskScreen) .. 
// En hann er fyrsti skjárinn í stakknum þannig skjárinn er ekki með back takka og tekur ekki allan skjáinn .. 
// Þarf ég ekki að hafa í stakknum; 1.Homefeed 2.AddTaskScreen og nesta BtmTabNavigator í homefeed til að fá til ætlaða virkni ..  

export default function App() {

  return (
    <NavigationContainer>

      <StackNavigator></StackNavigator>
      {/* <BtmTabNavigator /> */}

    </NavigationContainer>
  );
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



