import React, { Component } from "react";
import {ScrollView, Text, Linking, View, StyleSheet} from "react-native";
import { Card, Button } from "react-native-elements";

export class MyContracts extends Component{
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    static navigationOptions = {
        title: 'Mes Contrats',
    };

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

    render() {
        const { navigate } = this.props.navigation;
        i = 0;
        if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <Text>Bonjour ! </Text>
                </View>
            )
        }
        return(
            <View style={{flex: 1}}>
                <Button
                    title="FAQ"
                    onPress={() =>
                        navigate('FAQ')
                    }
                />
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                        {this.state.dataSource.map(({contractnumber, bankownerlastname, insurednumber, bankownerfirstname, dateeffective, dateending, formulaname, id}) =>
                            <Card key={id + i++}>
                                <Text>Contrat N°{contractnumber}</Text>
                                <Text>Titulaire du contrat : {bankownerlastname} {bankownerfirstname}</Text>
                                <Text>Date d'effet : {dateeffective}</Text>
                                <Text>Date de fin : {dateending}</Text>
                                <Text>Formule : {formulaname}</Text>
                                <Text>Nombre de bénéficiaires : {insurednumber}</Text>
                                <Button
                                    title={"Détails du contrat"}
                                    onPress={() =>
                                        navigate('ContractDetail', {id: id})
                                    }
                                />
                            </Card>
                        )}
                    </ScrollView>
                    {/*<Text>{this.state.dataSource.id}</Text>*/}
                    {/*<Text>Contrat N°{this.state.dataSource.contractnumber}</Text>*/}
                    {/*<Text>{this.state.dataSource.membership_id}</Text>*/}
                    {/*<Text>{this.state.dataSource.bankowneraddress}, {this.state.dataSource.bankownerzipcode}, {this.state.dataSource.bankownercity}</Text>*/}
                    {/*<Text>{this.state.dataSource.bankownercountry}</Text>*/}
                </View>
            </View>
        );
    }
};


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