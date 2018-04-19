import React, { Component } from 'react';
import {Linking, Text, View} from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style';


export class ConnectSpace extends Component
{
    static navigationOptions = {
        title: 'Retour',
    };
    render()
    {
        return(
            <View>
                <Card>
                    <Text style = { styles.FaqTitleStyle }>Comment me connecter à mon espace ?</Text>
                    <Text style = { styles.FaqTextStyle }>1ère connexion : une fois votre espace activé, nous vous demanderons de renseigner une adresse email et un mot de passe de votre choix qui vous serviront d’identifiants de connexion.</Text>
                    <Text style = { styles.FaqTextStyle }>La prochaine fois, rendez-vous directement sur la page <Text style={styles.TextLink} onPress={ ()=> Linking.openURL('https://www.monsantiane.fr/connexion') } >www.monsantiane.fr/connexion</Text>, renseignez l’adresse email et le mot de passe que vous avez définis et cliquez sur « Connexion ». Simple, non ?</Text>
                </Card>
            </View>
        );
    }
}