import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';


export class ConnectionIssues extends Component
{
    static navigationOptions =
        {
            title: 'Connexion Issues',
        };
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>Je rencontre des problèmes de connexion</Text>
                    <Text style = { styles.TextStyle }>Assurez-vous d’avoir bien renseigné les bons identifiants :</Text>
                    <Text style = { styles.TextStyle }> - Votre adresse email : il s’agit de l’adresse email que vous avez renseigné lors de votre 1ère connexion.</Text>
                    <Text style = { styles.TextStyle }> - Votre mot de passe : il s’agit d’un mot de passe que vous avez choisi lors de votre 1ère connexion.</Text>
                    <Text style = { styles.TextStyle }> - Assurez-vous d’avoir bien tenu compte des éventuelles majuscules quand vous avez tapé votre mot de passe.</Text>
                    <Text style = { styles.TextStyle }> - Essayez avec un nouveau mot de passe : pour cela, cliquez sur J'ai oublié mon mot de passe. Un lien vous sera envoyé par email pour le réinitialiser.</Text>
                    <Text style = { styles.TextStyle }> - Tentez ensuite de vous connecter avec ce nouveau mot de passe.</Text>
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