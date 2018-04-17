import React, { Component } from "react";
import {ScrollView, Text, Linking, View, StyleSheet} from "react-native";
import { Card, Button } from "react-native-elements";
import { GetContracts } from "../api/GetContracts";


export class MyContracts extends Component{
    static navigationOptions = {
        title: 'Mes Contrats',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Button
                    title="FAQ"
                    onPress={() =>
                        navigate('FAQ')
                    }
                />
                <GetContracts />
                {/*<ScrollView contentContainerStyle={{paddingVertical: 20}}>*/}
                    {/*{images.map(({name, image, url, key}) =>*/}
                        {/*<Card title={`CARD ${key}`} image={image} key={key}>*/}
                            {/*<Text style={{marginBottom: 10}}>*/}
                                {/*Photo by {name}.*/}
                            {/*</Text>*/}
                            {/*<Button*/}
                                {/*title={"Go to " + name + "'s profile"}*/}
                                {/*onPress={() =>*/}
                                    {/*navigate('ContractDetail', {name: name})*/}
                                {/*}*/}
                            {/*/>*/}
                        {/*</Card>*/}
                    {/*)}*/}
                {/*</ScrollView>*/}
            </View>
        )
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
    });