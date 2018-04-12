import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default class SecondScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: "Mes Contrats",
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
            <View style={
                {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'

                }
            }>
                <Text>Mes Contrats</Text>
            </View>
        )
    }
}

