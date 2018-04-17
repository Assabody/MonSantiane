import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export class ConnexionActivity extends Component
{
    static navigationOptions =
        {
            title: 'Connexion',
        }
    render()
    {
        const { navigate } = this.props.navigation;
        const list = [
            {
                title: 'Comment me connecter à mon espace ?',
                icon: 'av-timer',
                link: 'ActivationSpace'
            },
            {
                title: 'J’ai perdu mes identifiants de connexion',
                icon: 'flight-takeoff',
                link: 'LoseId'
            },
            {
                title: 'Des problèmes de connexion ?',
                icon: 'flight-takeoff',
                link: 'ActivationIssues'
            },
            {
                title: 'Je souhaite changer d\'identifiants',
                icon: 'av-timer',
                link: 'ChangeMail'
            },
        ];
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>Comment me connecter à mon espace ?</Text>
                    <List>
                        {
                            list.map((item, i) => (
                                <ListItem
                                    key={i}
                                    title={item.title}
                                    leftIcon={{name: item.icon}}
                                    onPress = { () => {
                                        navigate(item.link);
                                    }}
                                />
                            ))
                        }
                    </List>
                </View>
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