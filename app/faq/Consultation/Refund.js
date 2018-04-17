import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';


export class Refund extends Component
{
    static navigationOptions =
        {
            title: 'Refund',
        };
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>Je ne vois pas mon remboursement</Text>
                    <Text style = { styles.TextStyle }>Vos remboursements et prestations sont répertoriés dans la rubrique Mes prestations de votre espace.</Text>
                    <Text style = { styles.TextStyle }>Vous avez reçu sur votre compte bancaire un remboursement et ne le voyez pas sur votre espace ?</Text>
                    <Text style = { styles.TextStyle }>Si le problème persiste au-delà de 3 jours après la date de réception de votre remboursement, contactez-nous.</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
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