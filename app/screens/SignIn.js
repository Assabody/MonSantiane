import React from "react";
import { View, ScrollView, TouchableOpacity, Text, Image } from "react-native";
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
            <View style={{
                paddingTop: 3,
                alignItems: 'center',
                flex:1
            }}>
                <View style={{flex:1}}>
                    <Image style={{width:250, height:250}} source={require("../images/logo-santiane.png")}/>
                </View>
                <View style={{flex:3, marginBottom:60, marginTop:35}}>
                    <Card>
                        <FormLabel>Email</FormLabel>
                        <FormInput autoCapitalize='none' placeholder="Email address..." onChangeText={(val) => this.setState({email: val})}/>
                        <FormLabel>Password</FormLabel>
                        <FormInput secureTextEntry placeholder="Password..." onChangeText={(val) => this.setState({password: val})}/>
                        <FormValidationMessage>{this.state.errors}</FormValidationMessage>
                        <ScrollView style={{height:250}}>
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
                                    <Text style={styless.buttonText}>Se connecter</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </Card>
                </View>

                <FAQButton nav={this}/>
            </View>
        )
    }
}