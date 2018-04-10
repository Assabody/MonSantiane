import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class Component1 extends React.Component {
    onPress() {
        console.log("View pressed");
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <TouchableHighlight style={styles.v1} onPress={this.onPress}>
                        <View>
                            <Text>View 1</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.v2}>
                        <Text>View 2</Text>
                    </View>
                    <View style={styles.v3}>
                        <Text>View 3</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100
    },
    v1: {
        flex: 1,
        backgroundColor: 'red',
        padding: 10
    },
    v2: {
        flex: 1,
        backgroundColor: 'green',
        padding: 10
    },
    v3: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10
    }
});

AppRegistry.registerComponent('Component1', () => Component1)