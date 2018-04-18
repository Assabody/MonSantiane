import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableOpacity } from 'react-native';
import styles from '../style';

export class Home extends Component
{
    render()
    {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <View>
                    <Text style = { styles.TitleStyle }>Retrouvez ici les questions les plus fréquentes</Text>
                    <Text style = { styles.TextStyle }>Consultez ici les questions les plus fréquentes vis-à-vis de l’utilisation de votre espace adhérent monsantiane.fr et accédez à notre formulaire de contact en cas de besoin.</Text>
                </View>
                <TouchableOpacity onPress={() => navigate('Activation')}>
                    <View style={styles.buttonClick}>
                        <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>Activation de mon espace</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('FaqConnect')}>
                    <View style={styles.buttonClick}>
                        <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>Connexion à mon espace</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Consultation')}>
                    <View style={styles.buttonClick}>
                        <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>Consultation de mes informations</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}