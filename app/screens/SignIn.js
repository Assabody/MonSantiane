import React from "react";
import { View, Text } from "react-native";
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from "react-native-elements";

import { onSignIn } from "../auth";

export default class Signin extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            errors: []
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
                    <Text>errors</Text>
                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="SIGN IN"
                        onPress={() => {
                            onSignIn(this.state.email, this.state.password).then(() => this.props.navigation.navigate("SignedIn")).catch((err) => console.log("Error: " + err));
                        }}
                    />
                </Card>
                <Text>{this.state.email}</Text>
            </View>
        )
    }
}