import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Linking, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Camera, Permissions } from 'expo';

export class Documents extends React.Component {
    render() {
        return <RootStack />;
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    };

    constructor(props) {
        super(props);
        this.state = { isLoading: true, arrayUri: []};
    }

    componentDidMount() {
        fetch('https://api.santiane.fr/etna/mobilecamp/login?filter={"login":"etna@santiane.fr","password":"codecampetna", "auto_refresh":1}');
        return fetch('https://api.santiane.fr/etna/mobilecamp/document?filter={"contract_id":2570}')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                this.setState( {
                    isLoading: false,
                    dataSource: JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")"))),
                }, () => {});
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    _handlePress = (url) => {
        Linking.openURL(url);
        this.props.onPress && this.props.onPress();
    };

    returnData(uri) {
        this.setState({arrayUri: uri});
    }

    resetData() {
        const image = { uri: this.state.arrayUri[0].uri, type: 'image/jpeg', name: 'image' + '-' + Date.now() + '.jpg' };
        const imgBody = new FormData();
        imgBody.append('image', image);


        this.setState({arrayUri: []});
    }

    render() {
        const { navigate } = this.props.navigation;
        if (this.state.isLoading) {
            return <View><Text>Ca charge</Text></View>
        }
        else {
            if (this.state.arrayUri.length !== 0) {
                console.log(this.state.arrayUri);
                return (
                    <View style={styles.container}>
                        <Text> Ajouter un document</Text>
                        <Button title="Add Document" onPress={() => {
                            navigate("Details", {returnData: this.returnData.bind(this), uriArray: this.state.arrayUri})
                        }}/>
                        <FlatList
                            data={this.state.arrayUri}
                            horizontal
                            renderItem={({item}) => <Image style={{width: 70, height: 70}} source={{uri: item.uri}}/>}
                            keyExtractor={(item, index) => index.toString()}
                            extraData={this.state}
                        />
                        <Button title="Envoyer" onPress={() => {this.resetData()}}/>
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={({item}) => <View>
                                <Text>{item.id} : {item.label} et link : </Text>
                                <Button onPress={() => {
                                    this._handlePress(item.link)
                                }} title="Document" style={{flex: 1}}/>
                            </View>}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                );
            }
            else
                return (
                    <View style={styles.container}>
                        <Text> Ajouter un document</Text>
                        <Button title="Add Document" onPress={() => {
                            navigate("Details", {returnData: this.returnData.bind(this), uriArray: this.state.arrayUri})
                        }}/>
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={({item}) => <View>
                                <Text>{item.id} : {item.label} et link : </Text>
                                <Button onPress={() => {
                                    this._handlePress(item.link)
                                }} title="Document" style={{flex: 1}}/>
                            </View>}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                )
        }
    }
}

class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Photo'
    };

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    async takePicture() {
        console.log("pressed2");
        let photo = null;
        if (this.camera) {
            photo = await this.camera.takePictureAsync();
            let arr = this.props.navigation.state.params.uriArray;
            arr.push({uri: photo.uri});
            this.props.navigation.state.params.returnData(arr);
            this.props.navigation.goBack();
        }
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => {this.camera = ref}}>
                        <Button style={styles.capture} title="Capture" onPress={() => {let res = this.takePicture()}}/>
                    </Camera>
                </View>
            );
        }
    }
}

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        initialRouteName: 'Home',
    }
);


const styles = StyleSheet.create({
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    },
});
