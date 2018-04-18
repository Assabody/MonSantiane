import React, { Component } from "react";
import {ScrollView, Text, Linking, View, StyleSheet} from "react-native";
import { Card, Button } from "react-native-elements";

export class ContractDetail extends Component{
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    static navigationOptions = {
        title: 'Détails du Contrat',
    };

    componentDidMount(){
        var {params} = this.props.navigation.state;
        return fetch('https://api.santiane.fr/etna/mobilecamp/contract?id=' + params.id)
            .then((response) => response.json())
            .then((responseJson) => {
                let data = JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")")));
                this.setState({
                    isLoading: false,
                    dataSource: data,
                }, function(){

                });
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render() {
        const { navigate } = this.props.navigation;
        var {params} = this.props.navigation.state;
        if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <Text>Bonjour ! </Text>
                    <Button
                        title="FAQ"
                        onPress={() =>
                            navigate('FAQ')
                        }
                    />

                    <Button
                        title="Bénéficiaires"
                        onPress={() =>
                            navigate('Insured', {id: params.id})
                        }
                    />
                    <Button
                        title="Documents"
                        onPress={() =>
                            navigate('Documents', {id: params.id})
                        }
                    />
                    <Button
                        title="Remboursements"
                        onPress={() =>
                            navigate('Asktorefund', {id: params.id})
                        }
                    />
                </View>
            )
        }
        return(
            <View style={{flex:1}}>
                <Button
                    title="FAQ"
                    onPress={() =>
                        navigate('FAQ')
                    }
                />

                <View>
                    {/*@TODO view de la page en elle meme*/}
                    <Text>Formule {this.state.dataSource.formulaname}</Text>
                    <Text>Contrat N°{this.state.dataSource.contractnumber}</Text>
                    <Text>Date d'effet : {this.state.dataSource.dateeffective}</Text>
                    <Text>Date de fin : {this.state.dataSource.dateending}</Text>
                    <Text>Titulaire du contrat : {this.state.dataSource.bankownerfirstname} {this.state.dataSource.bankownerlastname}</Text>
                    <Text>Adresse du titulaire : {this.state.dataSource.bankowneraddress}, {this.state.dataSource.bankownerzipcode} {this.state.dataSource.bankownercity}</Text>
                    <Text>Nombre d'assurés : {this.state.dataSource.insurednumber}</Text>
                    <Button
                        title="Bénéficiaires"
                        onPress={() =>
                            navigate('Insured', {id: params.id})
                        }
                    />
                    <Text>Type de prélèvement : {this.state.dataSource.debittype}</Text>
                    <Text>Date de prélèvement : {this.state.dataSource.debitday}</Text>
                </View>


                <Button
                    title="Documents"
                    onPress={() =>
                        navigate('Documents', {id: params.id})
                    }
                />
                <Button
                    title="Remboursements"
                    onPress={() =>
                        navigate('Asktorefund', {id: params.id})
                    }
                />
            </View>
        );
    }
};


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
        container:
            {
                flex: 1,
                backgroundColor: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
            },
        button:
            {
                flex: 1,
            },
    });
