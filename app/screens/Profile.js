import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default class Profile extends React.Component {
    render() {
        return (
            <View style={
                {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }>

                <Text>Mon Profile</Text>
                <Button onPress={() => this.props.navigation.navigate('DrawerOpen')} title='Open Menu'/>
            </View>
        )
    }
}