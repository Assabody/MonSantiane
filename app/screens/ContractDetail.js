import React, { Component } from "react";
import { ScrollView, Text, Linking, View } from "react-native";
import { Card, Button } from "react-native-elements";

export class ContractDetail extends Component{
    render() {
        var {params} = this.props.navigation.state;
        return (
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                    <Card title='CARD' image={require("../images/3.jpg")}>
                        <Text style={{marginBottom: 10}}>
                            Photo by {params.name}.
                        </Text>

                        <Button
                            backgroundColor="#03A9F4"
                            title="VIEW NOW"
                            onPress={() => Linking.openURL(url)}
                        />
                    </Card>
                    {/*{images.map(({name, image, url, key}) => (
                        <Card title={`CARD ${key}`} image={image} key={key}>
                            <Text style={{marginBottom: 10}}>
                                Photo by {name}.
                            </Text>

                            <Button
                                backgroundColor="#03A9F4"
                                title="VIEW NOW"
                                onPress={() => Linking.openURL(url)}
                            />
                        </Card>
                    ))}*/}
                </ScrollView>
            </View>
        )
    }
};

