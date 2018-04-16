import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class ActivationActivity extends Component
{
    static navigationOptions =
        {
            title: 'Activation',
        }
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                </View>
            </View>
        );
    }
}