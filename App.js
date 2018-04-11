import React from 'react';

import DrawerStack from './app/stacks/drawerStack'
import {StackNavigator} from 'react-navigation'

const Navigator = StackNavigator(
    {
        drawerStack: {screen: DrawerStack}
    },
    {
        headerMode: 'none',
        initialRouteName: 'drawerStack'
    });

export default Navigator;