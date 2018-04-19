import React, { Component } from 'react';
import {Linking, Text, View} from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style';

export class ActivationEspace extends Component
{
    static navigationOptions = {
        title: 'Retour',
    };
    render()
    {
        return(
            <View>
                <Card>
                    <Text style = { styles.FaqTitleStyle }>Comment activer mon espace ?</Text>
                    <Text style = { styles.FaqTextStyle }>1. Rendez-vous sur la page <Text style={styles.TextLink} onPress={ ()=> Linking.openURL('https://www.monsantiane.fr/new/verify') } >www.monsantiane.fr/activation</Text></Text>
                    <Text style = { styles.FaqTextStyle }>2. Suivez la procédure indiquée : renseignez votre numéro d’adhérent, le code d'activation et votre nom que nous vous avons envoyés par email (intitulé « Espace Adhérent Santiane : votre accès »)</Text>
                    <Text style = { styles.FaqTextStyle }>3. Renseignez votre votre code postal tel que vous nous l'avez indiqué dans le cadre de votre contrat</Text>
                    <Text style = { styles.FaqTextStyle }>4. Cliquez sur « Activer mon espace »</Text>
                    <Text style = { styles.FaqTextStyle }>Nous vous demanderons ensuite de renseigner une adresse email valide qui vous servira d’identifiant, et un mot de passe de votre choix pour vos futures connexions.</Text>
                </Card>
            </View>
        );
    }
}