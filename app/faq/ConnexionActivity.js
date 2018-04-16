import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class ConnexionActivity extends Component
{
    static navigationOptions =
        {
            title: 'Connexion',
        }
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>Comment me connecter à mon espace ?</Text>
                </View>
            </View>
        );
    }
}
