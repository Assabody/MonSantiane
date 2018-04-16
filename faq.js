import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import ProjectNavigator from './app/StackNavigator';
import Icons from 'react-native-vector-icons/MaterialIcons';

export class Faq extends Component
{
    static navigationOptions =
        {
            title: 'faq',
        };
    render()
    {
        return(
            <View style = { styles.MainContainer }>
                <View>
                    <Text style = { styles.TitleStyle }>Questions les plus fréquentes</Text>
                    <Text style = { styles.TextStyle }>Consultez ici les questions les plus fréquentes vis-à-vis de l’utilisation de votre espace adhérent monsantiane.fr et accédez à notre formulaire de contact en cas de besoin.</Text>
                </View>
                <Button onPress = { this.props.navigation.navigate('Activation') } title = 'Activation de mon espace' />
                <Button onPress = { this.props.navigation.navigate('FaqConnect') } title = 'Connexion à mon espace' />
                <Button onPress = { this.props.navigation.navigate('Consultation') } title = 'Consultation de mes informations' />
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
            { justifyContent: 'center',

                flex:1,
                margin: 10

            },

        TextStyle:
            {
                fontSize: 18,
                textAlign: 'center',
                color: '#000',
            },

        TitleStyle:
            {
                fontSize: 24,
                textAlign: 'center',
                color: '#000',
                paddingBottom: 10,
            },
});