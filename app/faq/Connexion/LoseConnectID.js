import React, { Component } from 'react';
import {Linking, Text, View} from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style';


export class LoseConnectID extends Component
{
    static navigationOptions = {
        title: 'Retour',
    };
    render()
    {
        return(
            <View>
                <Card>
                    <Text style = { styles.FaqTitleStyle }>J’ai perdu mes identifiants de connexion</Text>
                    <Text style = { styles.FaqTextStyle }>Vous avez perdu votre mot de passe : il vous suffit de le réinitialiser, depuis la page de connexion en cliquant sur <Text style={styles.TextLink} onPress={ ()=> Linking.openURL('https://www.monsantiane.fr/recovery') } >J’ai oublié mon mot de passe</Text>.</Text>
                    <Text style = { styles.FaqTextStyle }>Un lien vous sera envoyé par email pour réinitialiser votre mot de passe.</Text>
                    <Text style = { styles.FaqTextStyle }>Vous avez perdu votre adresse email : vous ne savez plus quelle adresse email vous aviez renseignée pour vous connecter à votre espace ? <Text style={styles.TextLink} onPress={ ()=> Linking.openURL('https://www.santiane.fr/service-client?m1=51&m2=49') } >Contactez-nous</Text>.</Text>
                </Card>
            </View>
        );
    }
}