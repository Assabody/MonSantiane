import React, { Component } from "react";
import {ScrollView, Text, Linking, View, StyleSheet, TouchableOpacity} from "react-native";
import { Card, Button } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
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

                if (data.debittype == "prel_mensuel") {
                    data.debittypeAff = "Prélèvement mensuel";
                }

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
                        <Text style={styles.TitleStyle}>Formule {this.state.dataSource.formulaname}</Text>
                        <Text style={styles.TextStyle}>Contrat N°{this.state.dataSource.contractnumber}</Text>
                        <Text style={styles.TextStyle}>Valable du <Text style={{color:'#F57E20'}}>{this.state.dataSource.dateeffective}</Text> au <Text style={{color:'#F57E20'}}>{this.state.dataSource.dateending}</Text></Text>
                        <Text style={styles.TextStyle}>Titulaire du contrat : {this.state.dataSource.bankownerfirstname} {this.state.dataSource.bankownerlastname}</Text>
                        <Text style={styles.TextStyle}>Adresse du titulaire : {this.state.dataSource.bankowneraddress}, {this.state.dataSource.bankownerzipcode} {this.state.dataSource.bankownercity}</Text>
                        <Text style={styles.TextStyle}>Type de prélèvement : {this.state.dataSource.debittypeAff}</Text>
                        <Text style={styles.TextStyle}>Date du prélèvement : le {this.state.dataSource.debitday}</Text>
                        <Grid style={{marginTop: 8}}>
                            <Col size={2}><Text style={styles.TextStyle}>Nombre d'assurés : {this.state.dataSource.insurednumber}</Text></Col>
                            <Col size={1} style={{flex:1}}>
                                <View>
                                    <ScrollView>
                                        <TouchableOpacity onPress={() => navigate('Insured', {id: params.id})}>
                                            <View style={styles.buttonClick}>
                                                <Text style={{color: '#ffffff',fontSize: 18,textAlign: 'center', padding: 1}}>+ d'infos</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </Col>
                        </Grid>

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
            </View>
        );
    }
};