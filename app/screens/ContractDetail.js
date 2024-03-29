import React, { Component } from "react";
import {ScrollView, Text, Linking, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import { Card, Button } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from '../style';
import FAQButton from "./FAQButton";
import Moment from 'moment';

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

                if (data.debittype === "prel_mensuel") {
                    data.debittypeAff = "Prélèvement mensuel";
                }

                Moment.locale('fr');
                data.dateeffective = Moment(data.dateeffective).format("DD/MM/YYYY");
                data.dateending = Moment(data.dateending).format("DD/MM/YYYY");

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
                    <Image source={require("../images/throbber_13.gif")}/>
                </View>
            )
        }
        return(
            <View style={{flex:1}}>
                <View style={styles.container} style={{flex: 1}}>
                    <ScrollView style={{margin: 0, padding: 0}}>
                        <Card style={{flex:1}}>
                            <Text style={styles.TitleStyle}>Formule {this.state.dataSource.formulaname}</Text>
                            <Text style={styles.TextStyleDetails}>Contrat N°{this.state.dataSource.contractnumber}</Text>
                            <Text style={styles.TextStyleDetails}>Valable du <Text style={{color:'#F57E20'}}>{this.state.dataSource.dateeffective}</Text> au <Text style={{color:'#F57E20'}}>{this.state.dataSource.dateending}</Text></Text>
                            <Text style={styles.TextStyleDetails}>Titulaire du contrat : {this.state.dataSource.bankownerfirstname} {this.state.dataSource.bankownerlastname}</Text>
                            <Text style={styles.TextStyleDetails}>Adresse du titulaire : {this.state.dataSource.bankowneraddress}, {this.state.dataSource.bankownerzipcode} {this.state.dataSource.bankownercity}</Text>
                            <Text style={styles.TextStyleDetails}>Type de prélèvement : {this.state.dataSource.debittypeAff}</Text>
                            <Text style={styles.TextStyleDetails}>Date du prélèvement : le {this.state.dataSource.debitday}</Text>
                            <Grid style={{marginTop: 8}}>
                                <Row>
                                    <Col size={2}><Text style={styles.TextStyle}>Nombre d'assurés : {this.state.dataSource.insurednumber}</Text></Col>
                                    <Col size={1} style={{flex:1}}>
                                        <View>
                                            <ScrollView>
                                                <TouchableOpacity onPress={() => navigate('Insured', {id: params.id})}>
                                                    <View style={styles.buttonClick}>
                                                        <Text style={styles.buttonText}>+ d'infos</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </ScrollView>
                                        </View>
                                    </Col>
                                </Row>
                            </Grid>

                            <Grid style={{marginTop:45}}>
                                <Row>
                                    <Col>
                                        <ScrollView>
                                            <TouchableOpacity onPress={() => navigate('Documents', {id: params.id})}>
                                                <View style={styles.buttonClick}>
                                                    <Text style={styles.buttonText}>Documents</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </ScrollView>
                                    </Col>
                                    <Col style={{marginLeft:3}}>
                                        <ScrollView>
                                            <TouchableOpacity onPress={() => navigate('Asktorefund', {id: params.id})}>
                                                <View style={styles.buttonClick}>
                                                    <Text style={styles.buttonText}>Remboursements</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </ScrollView>
                                    </Col>
                                </Row>
                            </Grid>
                        </Card>
                    </ScrollView>
                </View>
                <FAQButton nav={this}/>
            </View>
        );
    }
};