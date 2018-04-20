import styles from "../style";
import React, { Component } from "react";
import {Text, View, TouchableOpacity} from "react-native";

export default class FAQButton extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <View style={{ position:'absolute',bottom: 10, right:10, alignSelf:'flex-end'}}>
                <TouchableOpacity onPress={() => this.props.nav.props.navigation.navigate("FAQ")}>
                    <View style={{borderRadius:300, flex: 1,
                        backgroundColor: '#F57E20',
                        fontSize: 16,
                        padding: 5}}>
                        <Text style={styles.buttonText}>FAQ</Text>
                    </View>
                </TouchableOpacity>
        </View>;
    }
}