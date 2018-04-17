import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export class ConsultationActivity extends Component
{
    static navigationOptions =
        {
            title: 'Consultation',
        }
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TitleStyle }>Consultation de mes informations</Text>
                    <Text style = { styles.TextStyle }>Je ne vois pas mon contrat</Text>
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