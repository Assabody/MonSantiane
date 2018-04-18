import React, { Component } from "react";
import {ScrollView, Text, View, StyleSheet, FlatList} from "react-native";
import { Card, Button } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";


export class Asktorefund extends React.Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true }
    }

    componentDidMount(){
        return fetch('https://api.santiane.fr/etna/mobilecamp/refund2?filter={"category_id":"1"}')
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
        refundStatus = function(status, amount = 0, date = 0) {
            if (status === '1') {
                return (
                    <Row>
                        <Col size={67} style={{backgroundColor: 'green', borderRightColor: 'black', borderRightWidth: 1}}>
                            <Text style={{color: 'white', padding: 5, textAlign: 'center'}}>Remboursement réglé le {date}</Text>
                        </Col>
                        <Col size={33} style={{backgroundColor: 'green'}}>
                            <Text style={{color: 'white', padding: 5, textAlign: 'right', textAnchor: 'middle',
                            textAlignVertical: 'bottom'}}>{amount}€</Text>
                        </Col>
                    </Row>
                )
            }
            else if (status === '2') {
                return (
                    <Row>
                        <Col style={{backgroundColor: 'orange'}}>
                            <Text style={{color: 'white', padding: 5, textAlign: 'center'}}>Remboursement en attente</Text>
                        </Col>
                    </Row>
                )
            }
            else {
                return (
                    <Row>
                        <Col style={{backgroundColor: 'red'}}>
                            <Text style={{color: 'white', padding: 5, textAlign: 'center'}}>Remboursement rejeté le {date}</Text>
                        </Col>
                    </Row>
                )
            }
        };
        if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <Text>Bonjour ! </Text>
                </View>
            )
        }
        return (
            <View style={styles.container} style={{flex: 1}}>
                <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 16}}>Mes Remboursements</Text>
                { console.log(this.state.dataSource[0]) }
                <ScrollView style={{margin: 0, padding: 0}}>
                    {this.state.dataSource[0].map(({contractnumber, enumrefundcategory, enumrefundcategory_id, provision_list, id, daterefund, amount}) =>
                        <Card key={id} style={{flex: 1, padding: 0, margin: 0}}>
                            <Text style={{fontWeight: 'bold'}}>Remboursement de la sécurité sociale</Text>
                            <Grid>
                                <Row>
                                    <Col size={67}><Text style={{textAlign: "center", color: 'gray'}}>Sécurité sociale</Text></Col>
                                    <Col size={33}></Col>
                                </Row>
                                <Row>
                                    <Col size={20}><Text style={{color: 'gray'}}>Base</Text></Col>
                                    <Col size={20}><Text style={{color: 'gray'}}>Taux</Text></Col>
                                    <Col size={20}><Text style={{color: 'gray'}}>Montant</Text></Col>
                                    <Col size={33}><Text style={{textAlign: 'right'}}>Remboursement</Text></Col>
                                </Row>
                            {provision_list.map(({refund_id, refundamount, expense, ssrate, ssamount}) => {
                                return (
                                    <Row>
                                        <Col size={20}><Text style={{color: 'gray'}}>{expense}€</Text></Col>
                                        <Col size={20}><Text style={{color: 'gray'}}>{ssrate}%</Text></Col>
                                        <Col size={20}><Text style={{color: 'gray'}}>{ssamount}€</Text></Col>
                                        <Col size={33}><Text style={{textAlign: 'right'}}>{refundamount}€</Text></Col>
                                    </Row>
                                )
                            })}
                            { console.log(enumrefundcategory_id) }
                                { refundStatus(enumrefundcategory_id, amount , daterefund) }

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