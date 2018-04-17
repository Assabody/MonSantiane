import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

export class Home extends Component
{
    render()
    {
        const { navigate } = this.props.navigation;
        return(
            <View style = { styles.MainContainer }>
                <View>
                    <Text style = { styles.TitleStyle }>Questions les plus fréquentes</Text>
                    <Text style = { styles.TextStyle }>Consultez ici les questions les plus fréquentes vis-à-vis de l’utilisation de votre espace adhérent monsantiane.fr et accédez à notre formulaire de contact en cas de besoin.</Text>
                </View>
                <Button onPress = {() => {
                    console.log("Activation view");
                    navigate('Activation');
                }} title = 'Activation de mon espace' />
                <Button onPress = {() => {navigate('FaqConnect') }} title = 'Connexion à mon espace' />
                <Button onPress = {() => {navigate('Consultation') }} title = 'Consultation de mes informations' />
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