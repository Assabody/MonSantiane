import React from 'react';
import { AppRegistry, Button, Linking, FlatList, StyleSheet, Text, View } from 'react-native';
import { Constants, WebBrowser } from 'expo';

export class Api {
    getContract(idContract) {
        return fetch('https://api.santiane.fr/etna/mobilecamp/contract?id=' + idContract)
            .then((response) => response.json())
            .then((responseJson) => {
                return JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")")));
            })
            .catch((error) =>{
                console.error(error);
                return "Error";
            });
    }
    /*return(
            <View style={styles.container}>
                <Text>{this.state.dataSource.id}, {this.state.dataSource.formulaname}</Text>
            </View>
        );*/


    getDocumentFromContractId(idContract) {
        return fetch('https://api.santiane.fr/etna/mobilecamp/document?filter={"contract_id":' + idContract +'}')
            .then((response) => response.json())
            .then((responseJson) => {
                return JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")")));
            })
            .catch((error) =>{
                console.error(error);
                return "Error";
            });
    }
    /*return (
         <View style={styles.container}>
             <FlatList
                   data={this.state.dataSource}
                   renderItem={({item}) => <Text>{item.id} : {item.label} et link : {item.link}</Text>}
                   keyExtractor={(item, index) => index.toString()}
                    />
          </View>
       )*/


    getDocumentCategories() {
        return fetch('https://api.santiane.fr/etna/mobilecamp/Document_category?type=all')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.value;
            })
            .catch((error) =>{
                console.error(error);
                return "Error";
            });
    }
    /*return (
              <View style={styles.container}>
                  <FlatList
                      data={this.state.dataSource}
                      renderItem={({item}) => <Text>{item.id} : {item.label}</Text>}
                      keyExtractor={(item, index) => index.toString()}
                  />
              </View>
          )*/

    getRefundFromRefundCategorie(idCategorie) {
        return fetch('https://api.santiane.fr/etna/mobilecamp/refund?filter={"category_id":"1"}')
            .then((response) => response.json())
            .then((responseJson) => {
                let res = JSON.parse(JSON.stringify(eval("(" + responseJson.value + ")")));
                return res.value;
            })
            .catch((error) => {
                console.error(error);
                return "Error"
            });
    }
    /*return (
                <View style={styles.container}>
                    <FlatList
                        style={{flex: 2}}
                        data={this.state.dataSource}
                        renderItem={({item}) => <View>
                            <Text>{item.id} : {item.enumrefundcategory},</Text>
                                <FlatList
                                    stryle={{flex: 2}}
                                    data={item.provision_list}
                                    renderItem={this.renderFirstItem.bind(this)}
                                    keyExtractor={(item2, index2) => index2.toString()}
                                />
                        </View>}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )*/

    getFormuleCategories() {
        return fetch('https://api.santiane.fr/etna/mobilecamp/refund_category?type=all')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.value;
            })
            .catch((error) => {
                console.error(error);
                return "Error";
            });
    }
    /*return (
                <View style={styles.container}>
                    <FlatList
                        style={{flex: 2}}
                        data={this.state.dataSource}
                        renderItem={({item}) => <View>
                            <Text>{item.id} : {item.label} : </Text>
                        </View>}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )*/

    getPersonFromContractId(contractId) {
        return fetch('https://api.santiane.fr/etna/mobilecamp/person?filter={"contract_id":"' + contractId + '"}') //2570
            .then((response) => response.json())
            .then((responseJson) => {
                return JSON.parse(JSON.stringify(eval("(" + responseJson.value + ")")));
            })
            .catch((error) => {
                console.error(error);
                return "Error";
            });
    }
/* return (
                <View style={styles.container}>
                    <FlatList
                        style={{flex: 2}}
                        data={this.state.dataSource}
                        renderItem={({item}) => <View>
                            <Text>{item.id} : {item.firstname}, {item.lastname} : </Text>
                        </View>}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )*/

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
    },
});