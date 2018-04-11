import React from 'react';
import {StackNavigator} from 'react-navigation';
import {TouchableOpacity, Text, View, Button} from 'react-native';
import DrawerScreen from "./drawerScreen";
import Icons from 'react-native-vector-icons/MaterialIcons';

const DrawerNavigation = StackNavigator({
    DrawerStack: {screen: DrawerScreen}
    },
    {
        headerMode: 'float',
        navigationOptions: ({navigation}) => (
            {
            headerStyle: {
                backgroundColor: '#ff9933',
                paddingLeft: 10,
                paddingRight: 10
            },
            title: 'Home',
            headerTintColor: 'white',
            headerLeft: <View>
                <TouchableOpacity
                    onPress={() => {
                        if (navigation.state.index === 0) {
                            navigation.navigate('DrawerOpen');
                        } else {
                            navigation.navigate('DrawerClose');
                        }
                    }}>
                    <Icons
                        name="menu"
                        size={32}
                        style={{color: 'white'}}
                    >
                    </Icons>
                </TouchableOpacity>
            </View>
        })
    }
);

export default DrawerNavigation;