import React, { Component } from "react";
import {ScrollView, Text, View, StyleSheet, FlatList} from "react-native";
import { Card, Button } from "react-native-elements";
import Moment from 'react-moment';

export class Asktorefund extends React.Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    static navigationOptions = {
        title: 'Mes remboursements',
    };

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
                    <View style={{backgroundColor: 'green'}}>
                        <Text style={{color: 'white', padding: 5, textAlign: 'center'}}>Remboursement de {amount}€ effectué le {date}</Text>
                    </View>
                )
            }
            else if (status === '2') {
                return (
                    <View style={{backgroundColor: 'orange'}}>
                        <Text style={{color: 'white', padding: 5, textAlign: 'center'}}>Remboursement en attente</Text>
                    </View>
                )
            }
            else {
                return (
                    <View style={{backgroundColor: 'red'}}>
                        <Text style={{color: 'white', padding: 5, textAlign: 'center'}}>Remboursement rejeté le {date}</Text>
                    </View>
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
                <Text style={{marginLeft: 20}}>Mes Remboursements</Text>
                { console.log(this.state.dataSource[0]) }
                <ScrollView style={{margin: 0, padding: 0}}>
                    {this.state.dataSource[0].map(({contractnumber, enumrefundcategory, enumrefundcategory_id, provision_list, id, daterefund, amount}) =>
                        <Card key={id} style={{flex: 1, padding: 0, margin: 0}}>
                            <Text style={{fontWeight: 'bold'}}>Remboursement de la sécurité sociale</Text>
                            {provision_list.map(({refund_id, refundamount, expense, ssrate}) =>
                                <View key={refund_id+1} style={{flex: 1, flexDirection: 'row', borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: '#d6d7da', padding: 5}}>
                                    <View style={{flex: 1}} ><Text>Base: {expense}€</Text></View>
                                    <View style={{flex: 1}} ><Text>Taux: {ssrate}%</Text></View>
                                    <View style={{flex: 1}} ><Text style={{textAlign: 'right'}}>Montant  {refundamount}€</Text></View>
                                </View>
                            )}
                            { console.log(enumrefundcategory_id) }
                            { refundStatus(enumrefundcategory_id, (amount == null ? 0 : amount) , (daterefund == null ? 0 : daterefund)) }

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