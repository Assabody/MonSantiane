import React, { Component } from 'react';
import {Linking, Text, View} from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style';

export class LoseId extends Component
{
    static navigationOptions = {
        title: 'Retour',
    };
    render()
    {
        return(
            <View>
                <Card>
                    <Text style = { styles.FaqTitleStyle }>J’ai perdu mes identifiants d’activation</Text>
                    <Text style = { styles.FaqTextStyle }>Les identifiants nécessaires pour activer votre espace vous ont été envoyés par email.</Text>
                    <Text style = { styles.FaqTextStyle }>Cet email a pour objet « Espace Adhérent Santiane : votre accès ».</Text>
                    <Text style = { styles.FaqTextStyle }>Nous vous invitons donc dans un premier temps à effectuer une recherche dans votre boîte mail pour tenter de retrouver cet email.</Text>
                    <Text style = { styles.FaqTextStyle }>Vérifiez également dans vos courriers indésirables.</Text>
                    <Text style = { styles.FaqTextStyle }>Si vous ne le retrouvez pas, <Text style={styles.TextLink} onPress={ ()=> Linking.openURL('https://www.santiane.fr/service-client?m1=51&m2=50#formMicro51') } >contactez-nous</Text>.</Text>
                </Card>
            </View>
        );
    }
}