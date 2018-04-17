import React, { Component } from "react";
import { ScrollView, Text, Linking, View } from "react-native";
import { Card, Button } from "react-native-elements";

export class ContractDetail extends Component{
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    static navigationOptions = {
        title: 'Détails du Contrat',
    };

    componentDidMount(){
        var {params} = this.props.navigation.state;
        return fetch('https://api.santiane.fr/etna/mobilecamp/contract?id=' + params.id)
            .then((response) => response.json())
            .then((responseJson) => {
                let data = JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")")));
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
        var {params} = this.props.navigation.state;
        return(
            <View style={{flex: 1}}>
                <Button
                    title="FAQ"
                    onPress={() =>
                        navigate('FAQ')
                    }
                />
                <Text>Bonjour le text : {params.id}</Text>
                {/*<View style={styles.container} style={{flex: 1}}>*/}
                    {/*<ScrollView contentContainerStyle={{paddingVertical: 20}}>*/}
                        {/*{this.state.dataSource.map(({contractnumber, formulaname, id}) =>*/}
                            {/*<Card key={id + i++}>*/}
                                {/*<Text>Formule  {formulaname}</Text>*/}
                                {/*<Text>Contrat N°{contractnumber}</Text>*/}
                                {/*<Button*/}
                                    {/*title={"Détails du contrat"}*/}
                                    {/*onPress={() =>*/}
                                        {/*navigate('ContractDetail', {id: id})*/}
                                    {/*}*/}
                                {/*/>*/}
                            {/*</Card>*/}
                        {/*)}*/}
                    {/*</ScrollView>*/}
                {/*</View>*/}
                <Button
                    title="Bénéficiaires"
                    onPress={() =>
                        navigate('Insured', {id: params.id})
                    }
                />
                <Button
                    title="Documents"
                    onPress={() =>
                        navigate('Documents', {id: params.id})
                    }
                />
                <Button
                    title="Remboursements"
                    onPress={() =>
                        navigate('Asktorefund', {id: params.id})
                    }
                />
            </View>
        );
    }
};

