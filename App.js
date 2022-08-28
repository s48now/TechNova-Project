import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Search from './screens/SearchTab';
import LearnMore from './screens/LearnMore';
/*
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
*/
import AboutUs from './screens/AboutUs';
import DrawerItems from './DrawerItems';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType = "front"
        initialRouteName = "Search"
        drawerContentOptions = {{
          activeTintColor: '#e91e63',
          itemStyle: { marginvertical: 10},
        }}
      >
        {
         DrawerItems.map(drawer=><Drawer.Screen
           key={drawer.name}
         />)
       }
      </Drawer.Navigator>
    </NavigationContainer>
    /*
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
