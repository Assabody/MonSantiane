import {StackNavigator} from 'react-navigator';
import {TouchableHighlight, Text, View} from 'react-native';

const DrawerNavigation = StackNavigator({
    DrawerStack: {screen: DrawerStack}
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#ff9933',
                paddingLeft: 10,
                paddingRight: 10
            },
            title: 'Home',
            headerTintColor: 'white',
            headerLeft: <View>
                <TouchableHighlight
                    onPress={() => {
                        navigation.navigate('DrawerOpen');
                    }}>
                    <Text>Menu</Text>
                </TouchableHighlight>
            </View>
        })
    }
);

export default DrawerNavigation