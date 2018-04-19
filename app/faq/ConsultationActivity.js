import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

import styles from '../style';

export class ConsultationActivity extends Component
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
                    <Text style = { styles.FaqTitleStyle }>Retrouvez les questions concernant la consultation de vos informations</Text>
                    <ScrollView>
                        <TouchableOpacity onPress={() => navigate('SeeContrat')}>
                            <View style={styles.FaqButtonClick}>
                                <Text style={{color: '#ffffff',fontSize: 20,textAlign: 'center', padding: 7}}>Je ne vois pas mon contrat</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('Refund')}>
                            <View style={styles.FaqButtonClick}>
                                <Text style={{color: '#ffffff',fontSize: 20,textAlign: 'center', padding: 7}}>Je ne vois pas mon remboursement</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('WrongInformation')}>
                            <View style={styles.FaqButtonClick}>
                                <Text style={{color: '#ffffff',fontSize: 20,textAlign: 'center', padding: 7}}>Les informations renseignées sur mon espace sont inexactes</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </Card>
            </View>
        );
    }
}