import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from "react-native-elements";

import FAQButton from "./FAQButton";
import {isSignedIn, onSignIn, onSignOut} from "../auth";
import styless from "../style";

export default class Signin extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            errors: ""
        }
    }

    render() {
        return(
            <View style={{ paddingVertical: 20 }}>
                <Card>
                    <FormLabel>Email</FormLabel>
                    <FormInput autoCapitalize='none' placeholder="Email address..." onChangeText={(val) => this.setState({email: val})}/>
                    <FormLabel>Password</FormLabel>
                    <FormInput secureTextEntry placeholder="Password..." onChangeText={(val) => this.setState({password: val})}/>
                    <FormValidationMessage>{this.state.errors}</FormValidationMessage>
                    <ScrollView>
                        <TouchableOpacity onPress={() => {
                            onSignIn(this.state.email, this.state.password)
                                .then((data) =>
                                    {
                                        if (data === false) {
                                            this.setState({errors: "Bad Credentials"})
                                        }
                                        else {
                                            isSignedIn().then((connected) => {
                                                if (connected === true) {
                                                    this.props.navigation.navigate("SignedIn")
                                                }
                                            }).catch((err) => console.log("Error: " + err));
                                        }
                                    }
                                )
                                .catch(
                                    (err) => console.log("Error: " + err)
                                );
                        }}>
                            <View style={styless.buttonClick}>
                                <Text style={styless.buttonText}>Se deconnecter</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </Card>
                <FAQButton nav={this}/>
            </View>
        )
    }
}