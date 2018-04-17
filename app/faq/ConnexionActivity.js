import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

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

const styles = StyleSheet.create(
    {
        MainContainer:
            { justifyContent: 'center',

                flex:1,
                margin: 10

            },

        TextStyle:
            {
                fontSize: 18,
                textAlign: 'center',
                color: '#000',
            },

        TitleStyle:
            {
                fontSize: 24,
                textAlign: 'center',
                color: '#000',
                paddingBottom: 10,
            },
    });