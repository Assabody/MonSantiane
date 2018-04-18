import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../style';

export class ConnexionActivity extends Component
{
    static navigationOptions =
        {
            title: 'Connexion',
        }
    render()
    {
        const { navigate } = this.props.navigation;
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>Comment me connecter à mon espace ?</Text>
                    <TouchableOpacity onPress={() => navigate('ConnectSpace')}>
                        <View style={styles.buttonClick}>
                            <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>Comment me connecter à mon espace ?</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('LoseConnectId')}>
                        <View style={styles.buttonClick}>
                            <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>J’ai perdu mes identifiants de connexion</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('ConnectionIssues')}>
                        <View style={styles.buttonClick}>
                            <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>Des problèmes de connexion ?</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('ChangeMail')}>
                        <View style={styles.buttonClick}>
                            <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>Je souhaite changer d'identifiants</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}