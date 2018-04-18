import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../style';

export class ConsultationActivity extends Component
{
    static navigationOptions =
        {
            title: 'Consultation',
        }
    render()
    {
        const { navigate } = this.props.navigation;
        return(
            <View>
                <View>
                    <Text style = { styles.TitleStyle }>Consultation de mes informations</Text>
                    <TouchableOpacity onPress={() => navigate('SeeContrat')}>
                        <View style={styles.buttonClick}>
                            <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>Je ne vois pas mon contrat</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('Refund')}>
                        <View style={styles.buttonClick}>
                            <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>Je ne vois pas mon remboursement</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('WrongInformation')}>
                        <View style={styles.buttonClick}>
                            <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>Les informations renseignées sur mon espace sont inexactes</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}