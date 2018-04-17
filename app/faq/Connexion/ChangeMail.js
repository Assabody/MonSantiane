import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';


export class ChangeMail extends Component
{
    static navigationOptions =
        {
            title: 'Change Mail',
        };
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>Je souhaite changer d’adresse email et/ou de mot de passe</Text>
                    <Text style = { styles.TextStyle }>Rien de plus simple : rendez-vous sur votre espace dans la rubrique Mon compte.</Text>
                    <Text style = { styles.TextStyle }>Vous pourrez ici modifier votre adresse email et votre mot de passe.</Text>

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