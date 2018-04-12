import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icons } from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/Home'
import MyContract from '../screens/MyContracts'

export const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Feed',
            iconName: 'info'
        },
        MyContracts: {
            screen: MyContract
        }
    }
});

export default Tabs;