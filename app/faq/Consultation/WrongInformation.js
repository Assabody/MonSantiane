import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';


export class WrongInformation extends Component
{
    static navigationOptions =
        {
            title: 'Wrong Information',
        };
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>Les informations renseignées sur mon espace sont inexactes (adresse postale, bénéficiaires, info banque…)</Text>
                    <Text style = { styles.TextStyle }>Si vous constatez sur votre espace une erreur dans les informations renseignées à votre égard ou à l’égard des bénéficiaires de votre contrat.</Text>
                    <Text style = { styles.TextStyle }>Nous vous invitons à nous le signaler en effectuant une demande sur notre service client en ligne.</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
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