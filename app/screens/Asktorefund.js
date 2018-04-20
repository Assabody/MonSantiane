import React, { Component } from "react";
import {ScrollView, Text, View, StyleSheet, FlatList, Image} from "react-native";
import { Card } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from '../style';
import FAQButton from './FAQButton';


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
                        <Col size={67} style={{backgroundColor: '#F57E20', borderRightColor: 'black', marginRight: 1}}>
                            <Text style={{color: 'white', padding: 5, textAlign: 'center'}}>Remboursement réglé le {date}</Text>
                        </Col>
                        <Col size={33} style={{backgroundColor: '#F57E20'}}>
                            <Text style={{color: 'white', padding: 5, textAlign: 'right', textAnchor: 'middle',
                            textAlignVertical: 'bottom'}}>Total : {amount}€</Text>
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
                    <Image source={require("../images/throbber_13.gif")}/>
                </View>
            )
        }
        return (
            <View style={styles.container} style={{flex: 1}}>
                <ScrollView style={{margin: 0, padding: 0}}>
                    {this.state.dataSource[0].map(({contractnumber, enumrefundcategory, enumrefundcategory_id, provision_list, id, daterefund, amount}) =>
                        <Card key={id} style={{flex: 1, padding: 0, margin: 0}}>
                            <Text style={{fontWeight: 'bold', fontSize:16}}>Remboursement de la sécurité sociale</Text>
                            <Grid>
                                <Row>
                                    <Col size={67}><Text style={styles.TextStyleRefunds}>Sécurité sociale</Text></Col>
                                    <Col size={33}></Col>
                                </Row>
                                <Row>
                                    <Col size={20}><Text style={styles.TextStyleRefunds}>Base</Text></Col>
                                    <Col size={20}><Text style={styles.TextStyleRefunds}>Taux</Text></Col>
                                    <Col size={20}><Text style={styles.TextStyleRefunds}>Montant</Text></Col>
                                    <Col size={33}><Text style={{textAlign: 'right', fontSize:14}}>Remboursement</Text></Col>
                                </Row>
                            {provision_list.map(({refund_id, refundamount, expense, ssrate, ssamount}) => {
                                return (
                                    <Row>
                                        <Col size={20}><Text style={styles.TextStyleRefunds}>{expense}€</Text></Col>
                                        <Col size={20}><Text style={styles.TextStyleRefunds}>{ssrate}%</Text></Col>
                                        <Col size={20}><Text style={styles.TextStyleRefunds}>{ssamount}€</Text></Col>
                                        <Col size={33}><Text style={{textAlign: 'right', fontSize:16}}>{refundamount}€</Text></Col>
                                    </Row>
                                )
                            })}
                                { refundStatus(enumrefundcategory_id, amount , daterefund) }

                            </Grid>
                        </Card>
                    )}

                </ScrollView>
                <FAQButton nav={this}/>
            </View>
            );
    }

}