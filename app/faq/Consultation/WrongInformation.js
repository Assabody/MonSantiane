import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style';


export class WrongInformation extends Component
{
    static navigationOptions = {
        title: 'Retour',
    };
    render()
    {
        return(
            <View>
                <Card>
                    <Text style = { styles.FaqTitleStyle }>Les informations renseignées sur mon espace sont inexactes (adresse postale, bénéficiaires, info banque…)</Text>
                    <Text style = { styles.FaqTextStyle }>Si vous constatez sur votre espace une erreur dans les informations renseignées à votre égard ou à l’égard des bénéficiaires de votre contrat.</Text>
                    <Text style = { styles.FaqTextStyle }>Nous vous invitons à nous le signaler en effectuant une demande sur <Text style={styles.TextLink} onPress={ ()=> Linking.openURL('https://www.santiane.fr/service-client?m1=51&m2=48#formMicro51') } >notre service client en ligne</Text>.</Text>
                </Card>
            </View>
        );
    }
}