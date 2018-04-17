import React, { Component } from "react";
import {ScrollView, Text, View, StyleSheet} from "react-native";
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
                <View style={styles.container} style={{flex: 1}}>
                    <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                        {this.state.dataSource.map(({contractnumber, formulaname, id}) =>
                            <Card key={id + i++}>
                                <Text>Formule  {formulaname}</Text>
                                <Text>Contrat N°{contractnumber}</Text>
                                <Button
                                    title={"Détails du contrat"}
                                    onPress={() =>
                                        navigate('ContractDetail', {id: id})
                                    }
                                />
                            </Card>
                        )}
                    </ScrollView>
                </View>
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