import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../style';

export class ActivationActivity extends Component
{
    render()
    {
        const { navigate } = this.props.navigation;

        return(
            <View>
                <View>

                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                    <TouchableOpacity onPress={() => navigate('ActivationSpace')}>
                        <View style={styles.buttonClick}>
                            <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>Comment activer mon espace ?</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('LoseId')}>
                        <View style={styles.buttonClick}>
                            <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>J’ai perdu mes identifiants d’activation</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('ActivationIssues')}>
                        <View style={styles.buttonClick}>
                            <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>Je rencontre des problèmes d’activation</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}