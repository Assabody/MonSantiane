import React, { Component } from "react";
import { ScrollView, Text, Linking, View } from "react-native";
import { Card, Button } from "react-native-elements";
import { Api } from '../../AppApiCall';

const images = [
    {
        key: 1,
        name: "Nathan Anderson",
        image: require("../images/1.jpg"),
        url: "https://unsplash.com/photos/C9t94JC4_L8"
    },
    {
        key: 2,
        name: "Jamison McAndie",
        image: require("../images/2.jpg"),
        url: "https://unsplash.com/photos/waZEHLRP98s"
    },
    {
        key: 3,
        name: "Alberto Restifo",
        image: require("../images/3.jpg"),
        url: "https://unsplash.com/photos/cFplR9ZGnAk"
    },
    {
        key: 4,
        name: "John Towner",
        image: require("../images/4.jpg"),
        url: "https://unsplash.com/photos/89PFnHKg8HE"
    }
];

export class MyContracts extends Component{
    static navigationOptions = {
        title: 'Mes Contrats',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Api />
                <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                    {images.map(({name, image, url, key}) =>
                        <Card title={`CARD ${key}`} image={image} key={key}>
                            <Text style={{marginBottom: 10}}>
                                Photo by {name}.
                            </Text>
                            <Button
                                title="Go to Jane's profile"
                                onPress={() =>
                                    navigate('ContractDetail', { name: 'Jane' })
                                }
                            />
                        </Card>
                    )}
                </ScrollView>
            </View>
        )
    }
};

