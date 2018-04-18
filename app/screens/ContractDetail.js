import React, { Component } from "react";
import {ScrollView, Text, Linking, View, StyleSheet, TouchableOpacity} from "react-native";
import { Card, Button } from "react-native-elements";
import styles from '../style';

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
                    {/*<Button*/}
                        {/*title="FAQ"*/}
                        {/*onPress={() =>*/}
                            {/*navigate('FAQ')*/}
                        {/*}*/}
                    {/*/>*/}

                    {/*<Button*/}
                        {/*title="Bénéficiaires"*/}
                        {/*onPress={() =>*/}
                            {/*navigate('Insured', {id: params.id})*/}
                        {/*}*/}
                    {/*/>*/}
                    {/*<Button*/}
                        {/*title="Documents"*/}
                        {/*onPress={() =>*/}
                            {/*navigate('Documents', {id: params.id})*/}
                        {/*}*/}
                    {/*/>*/}
                    {/*<Button*/}
                        {/*title="Remboursements"*/}
                        {/*onPress={() =>*/}
                            {/*navigate('Asktorefund', {id: params.id})*/}
                        {/*}*/}
                    {/*/>*/}
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

                    <View style={{flex: 1,}}>
                        <Text>Formule {this.state.dataSource.formulaname}</Text>
                        <Text>Contrat N°{this.state.dataSource.contractnumber}</Text>
                        <Text>Date d'effet : {this.state.dataSource.dateeffective}</Text>
                        <Text>Date de fin : {this.state.dataSource.dateending}</Text>
                        <Text>Titulaire du contrat : {this.state.dataSource.bankownerfirstname} {this.state.dataSource.bankownerlastname}</Text>
                        <Text>Adresse du titulaire : {this.state.dataSource.bankowneraddress}, {this.state.dataSource.bankownerzipcode} {this.state.dataSource.bankownercity}</Text>
                        <Text>Nombre d'assurés : {this.state.dataSource.insurednumber}</Text>
                        <ScrollView>
                            <TouchableOpacity onPress={() => navigate('Insured', {id: params.id})}>
                                <View style={styles.buttonClick}>
                                    <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>Bénéficiaires</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                        <Text>Type de prélèvement : {this.state.dataSource.debittype}</Text>
                        <Text>Date de prélèvement : {this.state.dataSource.debitday}</Text>
                    </View>

                    <ScrollView>
                        <TouchableOpacity onPress={() => navigate('Documents', {id: params.id})}>
                            <View style={styles.buttonClick}>
                                <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>Documents</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('Asktorefund', {id: params.id})}>
                            <View style={styles.buttonClick}>
                                <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 7}}>Remboursements</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
            </View>
        );
    }
};