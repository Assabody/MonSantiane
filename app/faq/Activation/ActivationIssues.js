import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export class ActivationIssues extends Component
{
    static navigationOptions =
        {
            title: 'Activation Issues',
        };
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>Je rencontre des problèmes d’activation</Text>
                    <Text style = { styles.TextStyle }>Assurez-vous d’avoir bien renseigné les bons identifiants :</Text>
                    <Text style = { styles.TextStyle }> - Votre numéro d’adhérent, le code d'activation et votre nom tels qu’ils vous ont été transmis dans un email intitulé « Espace Adhérent Santiane : votre accès ».</Text>
                    <Text style = { styles.TextStyle }> - Assurez-vous d’avoir bien recopié ces identifiants en tenant compte des éventuelles majuscules.</Text>
                    <Text style = { styles.TextStyle }> - Votre code postal tels que vous nous l'avez communiqué dans le cadre de votre contrat.</Text>
                    <Text style = { styles.TextStyle }>Si le problème persiste, contactez-nous.</Text>
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