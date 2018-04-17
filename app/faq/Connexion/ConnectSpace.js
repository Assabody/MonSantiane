import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';


export class ConnectSpace extends Component
{
    static navigationOptions =
        {
            title: 'Connect Space',
        };
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>Comment me connecter à mon espace ?</Text>
                    <Text style = { styles.TextStyle }>1ère connexion : une fois votre espace activé, nous vous demanderons de renseigner une adresse email et un mot de passe de votre choix qui vous serviront d’identifiants de connexion.</Text>
                    <Text style = { styles.TextStyle }>La prochaine fois, rendez-vous directement sur la page www.monsantiane.fr/connexion, renseignez l’adresse email et le mot de passe que vous avez définis et cliquez sur « Connexion ». Simple, non ?</Text>
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