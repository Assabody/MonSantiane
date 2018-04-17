import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';


export class LoseConnectID extends Component
{
    static navigationOptions =
        {
            title: 'Lose Connect ID',
        };
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>J’ai perdu mes identifiants de connexion</Text>
                    <Text style = { styles.TextStyle }>Vous avez perdu votre mot de passe : il vous suffit de le réinitialiser, depuis la page de connexion en cliquant sur J’ai oublié mon mot de passe.</Text>
                    <Text style = { styles.TextStyle }>Un lien vous sera envoyé par email pour réinitialiser votre mot de passe.</Text>
                    <Text style = { styles.TextStyle }>Vous avez perdu votre adresse email : vous ne savez plus quelle adresse email vous aviez renseignée pour vous connecter à votre espace ? Contactez-nous.</Text>
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