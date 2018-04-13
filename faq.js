import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import
import Icons from 'react-native-vector-icons/MaterialIcons';

class MainActivity extends Component {
  static navigationOptions =
      {
        title: 'MainActivity',
      };

      FunctionToOpenSecondActivity = () =>
      {
          this.props.navigation.navigate('Second');
      }
      render()
      {
          return(
              <View style = { styles.MainContainer }>

                  <View style={{backgroundColor: 'blue', flex: 0.3}} />
                  <View style={{backgroundColor: 'red', flex: 0.5}} />
                  <View style={{marginBottom: 20}}>
                      <Text style = { styles.TextStyle }>This is MainActivity</Text>
                  </View>

                  <Button onPress = { this.FunctionToOpenSecondActivity } title = 'Click Here To Open Second Activity' />

              </View>
          );
      }
}

class SecondActivity extends Component
{
    static navigationOptions =
        {
            title: 'SecondActivity',
        };
    FunctionToOpenActivationActivity = () =>
    {
        this.props.navigation.navigate('Activation');
    }
    FunctionToOpenConnexionActivity = () =>
    {
        this.props.navigation.navigate('Connexion');
    }
    FunctionToOpenConsultationActivity = () =>
    {
        this.props.navigation.navigate('Consultation');
    }
    render()
    {
        return(
            <View style = { styles.MainContainer }>
                <View>
                    <Text style = { styles.TitleStyle }>Questions les plus fréquentes</Text>
                    <Text style = { styles.TextStyle }>Consultez ici les questions les plus fréquentes vis-à-vis de l’utilisation de votre espace adhérent monsantiane.fr et accédez à notre formulaire de contact en cas de besoin.</Text>
                </View>

                <Button onPress = { this.FunctionToOpenActivationActivity } title = 'Activation de mon espace' />
                <Button onPress = { this.FunctionToOpenConnexionActivity } title = 'Connexion à mon espace' />
                <Button onPress = { this.FunctionToOpenConsultationActivity } title = 'Consultation de mes informations' />

            </View>
        );
    }
}

class ActivationActivity extends Component
{
    static navigationOptions =
        {
            title: 'Activation',
        }
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                    <Text style = { styles.TextStyle }>Comment activer mon espace ?</Text>
                </View>
            </View>
        );
    }
}

class ConnexionActivity extends Component
{
    static navigationOptions =
        {
            title: 'Connexion',
        }
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TextStyle }>Comment me connecter à mon espace ?</Text>
                </View>
            </View>
        );
    }
}

class ConsultationActivity extends Component
{
    static navigationOptions =
        {
            title: 'Consultation',
        }
    render()
    {
        return(
            <View>
                <View>
                    <Text style = { styles.TitleStyle }>Consultation de mes informations</Text>
                    <Text style = { styles.TextStyle }>Je ne vois pas mon contrat</Text>
                </View>
            </View>
        );
    }
}

export default Project = StackNavigator(
    {
        First: { screen: MainActivity },

        Second: { screen: SecondActivity },

        Activation: { screen: ActivationActivity },

        Connexion: { screen: ConnexionActivity },

        Consultation: { screen: ConsultationActivity }
    }
);

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
