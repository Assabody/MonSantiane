import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../style';

export class Home extends Component
{
    static navigationOptions = {
        title: 'Retour',
    };
    render()
    {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <View>
                    <Text style = { styles.FaqTitleStyle }>Retrouvez ici les questions les plus fréquentes</Text>
                    <Text style = { styles.FaqTextStyle }>Consultez ici les questions les plus fréquentes sur l’utilisation de votre espace adhérent monsantiane.fr et accédez à notre formulaire de contact en cas de besoin.</Text>
                </View>
                <ScrollView>
                    <TouchableOpacity onPress={() => navigate('Activation')}>
                        <View style={styles.FaqButtonClick}>
                            <Text style={{color: '#ffffff',fontSize: 20,textAlign: 'center', padding: 7}}>Activation de mon espace</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('FaqConnect')}>
                        <View style={styles.FaqButtonClick}>
                            <Text style={{color: '#ffffff',fontSize: 20,textAlign: 'center', padding: 7}}>Connexion à mon espace</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('Consultation')}>
                        <View style={styles.FaqButtonClick}>
                            <Text style={{color: '#ffffff',fontSize: 20,textAlign: 'center', padding: 7}}>Consultation de mes informations</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}