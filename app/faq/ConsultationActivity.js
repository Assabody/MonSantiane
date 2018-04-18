import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export class ConsultationActivity extends Component
{
    static navigationOptions =
        {
            title: 'Consultation',
        }
    render()
    {
        const { navigate } = this.props.navigation;
        const list = [
            {
                title: 'Comment activer mon espace ?',
                icon: 'av-timer',
                link: 'ActivationSpace'
            },
            {
                title: 'J’ai perdu mes identifiants d’activation',
                icon: 'flight-takeoff',
                link: 'LoseId'
            },
            {
                title: 'Je rencontre des problèmes d’activation',
                icon: 'flight-takeoff',
                link: 'ActivationIssues'
            },
        ];
        return(
            <View>
                <View>
                    <Text style = { styles.TitleStyle }>Consultation de mes informations</Text>
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