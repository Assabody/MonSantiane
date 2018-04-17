import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export class SeeContrat extends Component
{
    static navigationOptions =
        {
            title: 'See Contrat',
        };
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>Je ne vois pas mon contrat</Text>
                    <Text style = { styles.TextStyle }>L’ensemble de vos contrats disponibles sur monsantiane.fr sont répertoriés sur l’écran d’accueil de votre espace une fois connecté, et en cliquant sur Mes contrats.</Text>
                    <Text style = { styles.TextStyle }>Si vous ne voyez pas apparaître votre contrat, contactez-nous.</Text>
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