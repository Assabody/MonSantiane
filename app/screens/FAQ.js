import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default class FirstScreen extends React.Component {
    static navigationOptions = {
    tabBarLabel: "FAQ",
        drawerIcon: ({tintColor}) => {
            return (
                <Icons
                    name="card-membership"
                    size={24}
                    style={{color: tintColor}}
                >
                </Icons>
            )
        }
    };
    render() {
        return (
            <View>
                <Text>FAQ</Text>
                <Button onPress={() => this.props.navigation.navigate('DrawerOpen')} title='Open Menu'/>
            </View>
        )
    }
}