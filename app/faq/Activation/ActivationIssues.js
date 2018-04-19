import React, { Component } from 'react';
import {Linking, Text, View} from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style';

export class ActivationIssues extends Component
{
    static navigationOptions = {
        title: 'Retour',
    };
    render()
    {
        return(
            <View>
                <Card>
                    <Text style = { styles.FaqTitleStyle }>Je rencontre des problèmes d’activation</Text>
                    <Text style = { styles.FaqTextStyle }>Assurez-vous d’avoir bien renseigné les bons identifiants :</Text>
                    <Text style = { styles.FaqTextStyle }> - Votre numéro d’adhérent, le code d'activation et votre nom tels qu’ils vous ont été transmis dans un email intitulé « Espace Adhérent Santiane : votre accès ».</Text>
                    <Text style = { styles.FaqAdStyle }> - Assurez-vous d’avoir bien recopié ces identifiants en tenant compte des éventuelles majuscules.</Text>
                    <Text style = { styles.FaqTextStyle }> - Votre code postal tels que vous nous l'avez communiqué dans le cadre de votre contrat.</Text>
                    <Text style = { styles.FaqTextStyle }>Si le problème persiste, <Text style={styles.TextLink} onPress={ ()=> Linking.openURL('https://www.santiane.fr/service-client?m1=51&m2=50#formMicro51') } >contactez-nous</Text>.</Text>
                </Card>
            </View>
        );
    }
}