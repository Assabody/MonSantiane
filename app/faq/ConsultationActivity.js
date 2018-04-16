import React, { Component } from 'react';
import { Text, View } from 'react-native';

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
