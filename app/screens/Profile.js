import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../auth";
import styless from "../style";

export default  class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }
    componentDidMount(){
        var {params} = this.props.navigation.state;
        console.log("ss");
        console.log(params);
        return fetch('https://api.santiane.fr/etna/mobilecamp/person?filter={"contract_id":"2570"}')
            .then((response) => response.json())
            .then((responseJson) => {
                let data = JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")")));
                console.log(data);
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
    const { navigate } = this.props.navigation;
    if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <Text>Loading...</Text>
                </View>
            )
        }
        let name = this.state.dataSource[0][0].firstname + " " + this.state.dataSource[0][0].lastname;

    return (<View style={{paddingVertical: 20}}>
            <Card title={name}>
                <View
                    style={{
                        backgroundColor: "#bcbec1",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        alignSelf: "center",
                        marginBottom: 20
                    }}
                >
                    { console.log(this.state.dataSource[0][0].firstname) }
                    <Text style={{color: "white", fontSize: 28}}>{this.state.dataSource[0][0].firstname[0].toUpperCase()}{this.state.dataSource[0][0].lastname[0].toUpperCase()}</Text>
                </View>
                <ScrollView>
                    <TouchableOpacity onPress={() => onSignOut().then(() => {navigate("SignedOut"); console.log("signed out")})}>
                        <View style={styless.buttonClick}>
                            <Text style={styless.buttonText}>Se deconnecter</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </Card>
        </View>)
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