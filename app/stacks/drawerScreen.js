import {DrawerNavigator} from 'react-navigation';
import React from 'react';
import {Platform} from 'react-native'

import SideMenu from '../stacks/sideMenu'
import Screen1 from '../screens/Home'
import Screen2 from '../screens/MyContracts'
import FAQ from '../screens/FAQ'
import Profile from '../screens/Profile'
import Icons from 'react-native-vector-icons/MaterialIcons';


const DrawerScreen = DrawerNavigator(
    {
        'Home': {screen: Screen1},
        'MyContracts': {
            screen: Screen2,

        },
        'Profile': {screen: Profile},
        'FAQ': {screen: FAQ}

    },
    {
        //contentComponent: SideMenu,
        initialRouteName: 'Home',
        headerMode: 'none',
        header: { visible: false },
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
    });

export default DrawerScreen;