import React, { Component } from 'react';
import {Linking, Text, View} from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style';


export class Refund extends Component
{
    static navigationOptions = {
        title: 'Retour',
    };
    render()
    {
        return(
            <View>
                <Card>
                    <Text style = { styles.FaqTitleStyle }>Je ne vois pas mon remboursement</Text>
                    <Text style = { styles.FaqTextStyle }>Vos remboursements et prestations sont répertoriés dans la rubrique Mes prestations de votre espace.</Text>
                    <Text style = { styles.FaqTextStyle }>Vous avez reçu sur votre compte bancaire un remboursement et ne le voyez pas sur votre espace ?</Text>
                    <Text style = { styles.FaqTextStyle }>Si le problème persiste au-delà de 3 jours après la date de réception de votre remboursement, <Text style={styles.TextLink} onPress={ ()=> Linking.openURL('https://www.santiane.fr/service-client?m1=51&m2=47') } >contactez-nous</Text>.</Text>
                </Card>
            </View>
        );
    }
}