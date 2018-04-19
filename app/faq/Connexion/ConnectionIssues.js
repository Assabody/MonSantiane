import React, { Component } from 'react';
import {Linking, Text, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style';


export class ConnectionIssues extends Component
{
    static navigationOptions = {
        title: 'Retour',
    };
    render()
    {
        return(
            <ScrollView>
                <Card>
                    <Text style = { styles.FaqTitleStyle }>Je rencontre des problèmes de connexion</Text>
                    <Text style = { styles.FaqTextStyle }>Assurez-vous d’avoir bien renseigné les bons identifiants :</Text>
                    <Text style = { styles.FaqTextStyle }> - Votre adresse email : il s’agit de l’adresse email que vous avez renseigné lors de votre 1ère connexion.</Text>
                    <Text style = { styles.FaqTextStyle }> - Votre mot de passe : il s’agit d’un mot de passe que vous avez choisi lors de votre 1ère connexion.</Text>
                    <Text style = { styles.FaqAdStyle }> - Assurez-vous d’avoir bien tenu compte des éventuelles majuscules quand vous avez tapé votre mot de passe.</Text>
                    <Text style = { styles.FaqTextStyle }> - Essayez avec un nouveau mot de passe : pour cela, cliquez sur <Text style={styles.TextLink} onPress={ ()=> Linking.openURL('https://www.monsantiane.fr/recovery') } >J'ai oublié mon mot de passe</Text>. Un lien vous sera envoyé par email pour le réinitialiser.</Text>
                    <Text style = { styles.FaqTextStyle }> - Tentez ensuite de vous connecter avec ce nouveau mot de passe.</Text>
                    <Text style = { styles.FaqTextStyle }>Si le problème persiste, <Text style={styles.TextLink} onPress={ ()=> Linking.openURL('https://www.santiane.fr/service-client?m1=51&m2=49') } >contactez-nous</Text>.</Text>
                </Card>
            </ScrollView>
        );
    }
}

