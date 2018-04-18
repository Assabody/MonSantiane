import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';


export class LoseId extends Component
{
    static navigationOptions =
        {
            title: 'Lose Id',
        };
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>J’ai perdu mes identifiants d’activation</Text>
                    <Text style = { styles.TextStyle }>Les identifiants nécessaires pour activer votre espace vous ont été envoyés par email.</Text>
                    <Text style = { styles.TextStyle }>Cet email a pour objet « Espace Adhérent Santiane : votre accès ».</Text>
                    <Text style = { styles.TextStyle }>Nous vous invitons donc dans un premier temps à effectuer une recherche dans votre boîte mail pour tenter de retrouver cet email.</Text>
                    <Text style = { styles.TextStyle }>Vérifiez également dans vos courriers indésirables.</Text>
                    <Text style = { styles.TextStyle }>Si vous ne le retrouvez pas, contactez-nous.</Text>
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