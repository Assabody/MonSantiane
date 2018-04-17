import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { List, ListItem } from 'react-native-elements'

export class Home extends Component
{
    render()
    {
        const { navigate } = this.props.navigation;
        const list = [
            {
                title: 'Activation de mon espace',
                icon: 'av-timer',
                link: 'Activation'
            },
            {
                title: 'Connexion à mon espace',
                icon: 'flight-takeoff',
                link: 'FaqConnect'
            },
            {
                title: 'Consultation de mes informations',
                icon: 'flight-takeoff',
                link: 'Consultation'
            },
        ];
        return(
            <View style = { styles.MainContainer }>
                <View>
                    <Text style = { styles.TitleStyle }>Retrouvez ici les questions les plus fréquentes</Text>
                    <Text style = { styles.TextStyle }>Consultez ici les questions les plus fréquentes vis-à-vis de l’utilisation de votre espace adhérent monsantiane.fr et accédez à notre formulaire de contact en cas de besoin.</Text>
                </View>
                <List>
                    {
                        list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{name: item.icon}}
                                onPress = { () => {navigate(item.link)}}
                            />
                        ))
                    }
                </List>
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