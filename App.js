import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DrawerNavigator} from 'react-navigation';

import Component1 from './app/components/component';
import FirstScreen from './screens/Home';
import SecondScreen from './screens/MyContracts';

const Drawer = DrawerNavigator(
    {
        First: {
            path: '/',
            screen: FirstScreen
        },
        Second: {
            path: '/',
            screen: SecondScreen
        }
    },
    {
        initialRouteName: 'First',
        drawerPosition: 'left'
    }
);

export default Drawer
/*
export default class App extends React.Component {
  render() {
    return (
        <View>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
            </View>
            <Component1/>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/