import React, { Component } from "react";
import {ScrollView, Text, View, StyleSheet} from "react-native";
import { Card, Button } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";

export class Insured extends React.Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }
    componentDidMount(){
        var {params} = this.props.navigation.state;
        console.log("ss");
        console.log(params);
        return fetch('https://api.santiane.fr/etna/mobilecamp/person?filter={"contract_id":"' + params.id + '"}')
            .then((response) => response.json())
            .then((responseJson) => {
                let data = JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")")));
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
        var {params} = this.props.navigation.state;
        if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <Text>Bonjour ! </Text>
                </View>
            )
        }
        return (
            <View style={styles.container} style={{flex: 1}}>
                <ScrollView style={{margin: 0, padding: 0}}>
                    { console.log(this.state.dataSource) }
                    {this.state.dataSource[0].map(({gender, firstname, lastname, regime, type, socialsecuritynumber, bankownerlastname, bankownerfirstname, bankowneraddress, bankownerzipcode, bankownercity, bankownercountry, bankowneriban, addresslabel, zipcode, city, country}) =>
                    <Card style={{flex: 1, padding: 0, margin: 0}}>
                        <Grid>
                            <Row>
                                <Col><Text style={{fontWeight: 'bold'}}>{gender} {lastname.toUpperCase()} {firstname}</Text></Col>
                            </Row>
                            if (adresslabel != null && addresslabel != "") {
                                <Row>
                                    <Col><Text>Adresse: {addresslabel} {zipcode} {city} {country}</Text></Col>
                                </Row>
                            }

                            <Row>
                                <Col><Text style={{fontWeight: 'bold'}}>N° sécurité sociale: {socialsecuritynumber}</Text></Col>
                            </Row>
                            <Row>
                                <Col><Text>{regime == null ? type : regime + " - " + type}</Text></Col>
                            </Row>
                            <Row>
                                <Col><Text style={{color: 'gray'}}>Base</Text></Col>
                            </Row>

                            {/*{ refundStatus(enumrefundcategory_id, amount , daterefund) }*/}
                        </Grid>
                    </Card>
                    )}
                </ScrollView>
            </View>
        );
    }
}

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