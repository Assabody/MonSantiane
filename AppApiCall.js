import React from 'react';
import { Button, Linking, FlatList, StyleSheet, Text, View } from 'react-native';
import { Constants, WebBrowser } from 'expo';


/* BETA TEST : LES BOUTONS SONT CASSES */
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        fetch('https://api.santiane.fr/etna/mobilecamp/login?filter={"login":"etna@santiane.fr","password":"codecampetna", "auto_refresh":1}');
        return fetch('https://api.santiane.fr/etna/mobilecamp/document?filter={"contract_id":2570}')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")"))));
                this.setState({
                    isLoading: false,
                    dataSource: JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")"))),
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }


    _handlePress = (url) => {
        Linking.openURL(url);
        this.props.onPress && this.props.onPress();
    };

    render() {
        if (this.state.isLoading)
            return (
                <View style={styles.container}>
                    <Text>Open up App.js to start working on your app!</Text>
                </View>
            );
        else
            return (
                <View style={styles.container}>
                    <FlatList
                        style={{flex: 2, backgroundColor: '#A1FFC2'}}
                        data={this.state.dataSource}
                        renderItem={({item}) => <View>
                            <Text>{item.id} : {item.label} et link : </Text>
                            <Button onPress={console.log("dadzada")} title="Document" style={{flex:1}}/>
                        </View>}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )
    }

}


/*

get documents from contract

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        fetch('https://api.santiane.fr/etna/mobilecamp/login?filter={"login":"etna@santiane.fr","password":"codecampetna", "auto_refresh":1}');
        return fetch('https://api.santiane.fr/etna/mobilecamp/document?filter={"contract_id":2570}')
            .then((response) => response.json())
            .then((responseJson) => {

                console.log(JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")"))));
                this.setState({
                    isLoading: false,
                    dataSource: JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")"))),
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading)
            return (
                <View style={styles.container}>
                    <Text>Open up App.js to start working on your app!</Text>
                </View>
            );
        else
            return (
                <View style={styles.container}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) => <Text>{item.id} : {item.label} et link : {item.link}</Text>}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )
    }

}

*/





/*

Get Documents Categories

export default class App extends React.Component {
    constructor(props) {
  super(props);
  this.state = { isLoading: true }
}

  componentDidMount() {
      fetch('https://api.santiane.fr/etna/mobilecamp/login?filter={"login":"etna@santiane.fr","password":"codecampetna", "auto_refresh":1}');
      return fetch('https://api.santiane.fr/etna/mobilecamp/Document_category?type=all')
          .then((response) => response.json())
          .then((responseJson) => {

              console.log(responseJson.value);
              this.setState({
                  isLoading: false,
                  dataSource: responseJson.value,
              }, function(){

              });

          })
          .catch((error) =>{
              console.error(error);
          });
  }

  render() {
      if (this.state.isLoading)
          return (
              <View style={styles.container}>
                  <Text>Open up App.js to start working on your app!</Text>
              </View>
          );
      else
          return (
              <View style={styles.container}>
                  <FlatList
                      data={this.state.dataSource}
                      renderItem={({item}) => <Text>{item.id} : {item.label}</Text>}
                      keyExtractor={(item, index) => index.toString()}
                  />
              </View>
          )
  }

}
*/


/*

Get contract

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('https://api.santiane.fr/etna/mobilecamp/contract?id=2570')
            .then((response) => response.json())
            .then((responseJson) => {
                let data = JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")")));
                console.log(data.id);
                this.setState({
                    isLoading: false,
                    dataSource: data,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }



    render(){
        if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <Text>Salut ! </Text>
                </View>
            )
        }
        return(
            <View style={styles.container}>
                <Text>{this.state.dataSource.id}, {this.state.dataSource.formulaname}</Text>
            </View>
        );
    }
}*/

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
