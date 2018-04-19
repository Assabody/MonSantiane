import React, { Component } from 'react';
import {Linking, Text, View} from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style';

export class SeeContrat extends Component
{
    static navigationOptions = {
        title: 'Retour',
    };
    render()
    {
        return(
            <View>
                <Card>
                    <Text style = { styles.FaqTitleStyle }>Je ne vois pas mon contrat</Text>
                    <Text style = { styles.FaqTextStyle }>L’ensemble de vos contrats disponibles sur monsantiane.fr sont répertoriés sur l’écran d’accueil de votre espace une fois connecté, et en cliquant sur Mes contrats.</Text>
                    <Text style = { styles.FaqTextStyle }>Si vous ne voyez pas apparaître votre contrat, <Text style={styles.TextLink} onPress={ ()=> Linking.openURL('https://www.santiane.fr/service-client?m1=51&m2=47') } >contactez-nous</Text>.</Text>
                </Card>
            </View>
        );
    }
}