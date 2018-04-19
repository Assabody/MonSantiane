import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

import styles from '../style';

export class ConnexionActivity extends Component
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
                    <Text style = { styles.FaqTitleStyle }>Retrouvez ici les questions concernant la connexion a votre espace</Text>
                    <ScrollView>
                        <TouchableOpacity onPress={() => navigate('ConnectSpace')}>
                            <View style={styles.FaqButtonClick}>
                                <Text style={{color: '#ffffff',fontSize: 20,textAlign: 'center', padding: 7}}>Comment me connecter à mon espace ?</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('LoseConnectID')}>
                            <View style={styles.FaqButtonClick}>
                                <Text style={{color: '#ffffff',fontSize: 20,textAlign: 'center', padding: 7}}>J’ai perdu mes identifiants de connexion</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('ConnectionIssues')}>
                            <View style={styles.FaqButtonClick}>
                                <Text style={{color: '#ffffff',fontSize: 20,textAlign: 'center', padding: 7}}>Des problèmes de connexion ?</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('ChangeMail')}>
                            <View style={styles.FaqButtonClick}>
                                <Text style={{color: '#ffffff',fontSize: 20,textAlign: 'center', padding: 7}}>Je souhaite changer d'identifiants</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </Card>
            </View>
        );
    }
}