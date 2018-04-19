import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../style';

export class ActivationActivity extends Component
{
    static navigationOptions = {
        title: 'Retour',
    };
    render()
    {
        const { navigate } = this.props.navigation;

        return(
            <View>
                <Card>

                    <Text style = { styles.FaqTitleStyle }>Retrouvez ici les questions concernant l'activation de votre espace</Text>
                    <ScrollView>
                        <TouchableOpacity onPress={() => navigate('ActivationSpace')}>
                            <View style={styles.FaqButtonClick}>
                                <Text style={{color: '#ffffff',fontSize: 20,textAlign: 'center', padding: 7}}>Comment activer mon espace ?</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('LoseId')}>
                            <View style={styles.FaqButtonClick}>
                                <Text style={{color: '#ffffff',fontSize: 20,textAlign: 'center', padding: 7}}>J’ai perdu mes identifiants d’activation</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('ActivationIssues')}>
                            <View style={styles.FaqButtonClick}>
                                <Text style={{color: '#ffffff',fontSize: 20,textAlign: 'center', padding: 7}}>Je rencontre des problèmes d’activation</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </Card>
            </View>
        );
    }
}