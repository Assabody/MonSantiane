import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export class ActivationEspace extends Component
{
    static navigationOptions =
        {
            title: 'Activation Espace',
        };
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                    <Text style = { styles.TextStyle }>1. Rendez-vous sur la page www.monsantiane.fr/activation</Text>
                    <Text style = { styles.TextStyle }>2. Suivez la procédure indiquée : renseignez votre numéro d’adhérent, le code d'activation et votre nom que nous vous avons envoyés par email (intitulé « Espace Adhérent Santiane : votre accès »)</Text>
                    <Text style = { styles.TextStyle }>3. Renseignez votre votre code postal tel que vous nous l'avez indiqué dans le cadre de votre contrat</Text>
                    <Text style = { styles.TextStyle }>4. Cliquez sur « Activer mon espace »</Text>
                    <Text style = { styles.TextStyle }>Nous vous demanderons ensuite de renseigner une adresse email valide qui vous servira d’identifiant, et un mot de passe de votre choix pour vos futures connexions.</Text>
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