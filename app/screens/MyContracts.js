import React, { Component } from "react";
import {ScrollView, Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import { Card, Button } from "react-native-elements";
import styles from '../style';
import FAQButton from './FAQButton';

export class MyContracts extends Component{
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    static navigationOptions = {
        title: 'Mes Contrats',
    };

    componentDidMount(){
        return fetch('https://api.santiane.fr/etna/mobilecamp/contract?filter={"limit":10}')
            .then((response) => response.json())
            .then((responseJson) => {
                let data = JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")")));
                console.log(data.id);
                this.setState({
                    isLoading: false,
                    dataSource: [data],
                }, function(){

                });
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render() {
        const { navigate } = this.props.navigation;
        if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <Image source={require("../images/throbber_13.gif")}/>
                </View>
            )
        }
        return(
            <View style={{flex: 1}}>
                <View style={styles.container} style={{flex: 1}}>
                    <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                        {this.state.dataSource.map(({contractnumber, formulaname, id}) =>
                            <Card key={id}>
                                <Text style={styles.TitleStyle}>Formule {formulaname}</Text>
                                <Text style={styles.TextStyle}>Contrat N°{contractnumber}</Text>
                                <TouchableOpacity onPress={() => navigate('ContractDetail', {id: id})}>
                                    <View style={styles.buttonClick}>
                                        <Text style={styles.buttonText}>Détails du contrat</Text>
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        )}
                    </ScrollView>
                </View>
                <FAQButton nav={this}/>
            </View>
        );
    }
};