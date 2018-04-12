import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details!</Text>
            </View>
        );
    }
}

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                { /* other code from before here */ }
                <Text onPress={() => this.props.navigation.navigate('Details')}>Go to Details</Text>
                <Button
                    title='BUTTON' />

                <Button
                    raised
                    icon={{name: 'cached'}}
                    title='BUTTON WITH ICON' />

                <Button
                    large
                    iconRight={{name: 'code'}}
                    title='LARGE WITH RIGHT ICON' />

                <Button
                    large
                    icon={{name: 'envira', type: 'font-awesome'}}
                    title='LARGE WITH ICON TYPE' />

                <Button
                    large
                    icon={{name: 'squirrel', type: 'octicon' }}
                    title='OCTICON' />
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                { /* other code from before here */ }
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

const HomeStack = StackNavigator({
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
});

const SettingsStack = StackNavigator({
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
});

export default TabNavigator(
    {
        Home: { screen: HomeStack },
        Settings: { screen: SettingsStack },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,    }
);