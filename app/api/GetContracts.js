//Get contract

import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";
import { Card } from "react-native-elements";

export class GetContracts extends React.Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('https://api.santiane.fr/etna/mobilecamp/contract?id=2570')
            .then((response) => response.json())
            .then((responseJson) => {
                let data = JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")")));
                console.log(data.id);
                this.setState({
                    isLoading: false,
                    dataSource: [data, data, data, data],
                }, function(){

                });
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render(){
        if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <Text>Salut ! </Text>
                </View>
            )
        }
        return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                    {this.state.dataSource.map(({contractnumber}) =>
                        <Card>
                            <Text>Contrat N°{contractnumber}</Text>
                        </Card>
                    )}
                </ScrollView>
                {/*<Text>{this.state.dataSource.id}</Text>*/}
                {/*<Text>Contrat N°{this.state.dataSource.contractnumber}</Text>*/}
                {/*<Text>{this.state.dataSource.membership_id}</Text>*/}
                {/*<Text>Date d'effet : {this.state.dataSource.dateeffective}</Text>*/}
                {/*<Text>Date de fin : {this.state.dataSource.dateending}</Text>*/}
                {/*<Text>Formule : {this.state.dataSource.formulaname}</Text>*/}
                {/*<Text>Titulaire du contrat : {this.state.dataSource.bankownerlastname} {this.state.dataSource.bankownerfirstname}</Text>*/}
                {/*<Text>{this.state.dataSource.bankowneraddress}, {this.state.dataSource.bankownerzipcode}, {this.state.dataSource.bankownercity}</Text>*/}
                {/*<Text>{this.state.dataSource.bankownercountry}</Text>*/}
                {/*<Text>Nombre de bénéficiaires : {this.state.dataSource.insurednumber}</Text>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
    },
});