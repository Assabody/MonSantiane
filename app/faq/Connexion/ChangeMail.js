import React, { Component } from 'react';
import {Linking, Text, View} from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../../style';


export class ChangeMail extends Component
{
    static navigationOptions = {
        title: 'Retour',
    };
    render()
    {
        return(
            <View>
                <Card>
                    <Text style = { styles.TextStyle }>Je souhaite changer d’adresse email et/ou de mot de passe</Text>
                    <Text style = { styles.TextStyle }>Rien de plus simple : rendez-vous sur votre espace dans la rubrique <Text style={styles.TextLink} onPress={ ()=> Linking.openURL('https://www.monsantiane.fr/redirect?state=myspace.profile.connectionsetting') } >Mon compte</Text>.</Text>
                    <Text style = { styles.TextStyle }>Vous pourrez ici modifier votre adresse email et votre mot de passe.</Text>

                </Card>
            </View>
        );
    }
}