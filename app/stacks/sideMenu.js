import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';


class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={this.navigateToScreen('Home')}>
                            <View style={{flexDirection: 'row'}}>
                                <Icons
                                    name="home"
                                    size={24}
                                    style={{color: 'black', paddingRight: 10}}
                                >
                                </Icons>
                                <Text>Accueil</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity onPress={this.navigateToScreen('Profile')}>
                            <View style={{flexDirection: 'row'}}>
                                <Icons
                                    name="account-circle"
                                    size={24}
                                    style={{color: 'black', paddingRight: 10}}
                                >
                                </Icons>
                                <Text>Mon Profile</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity onPress={this.navigateToScreen('MyContracts')}>
                            <View style={{flexDirection: 'row'}}>
                                <Icons
                                    name="class"
                                    size={24}
                                    style={{color: 'black', paddingRight: 10}}
                                >
                                </Icons>
                                <Text>Mes Contrats</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Icons
                        name="info"
                        size={24}
                        style={{color: 'black', textAlign: 'center', paddingLeft: 30, paddingRight: 10}}
                    >
                    </Icons>
                    <TouchableOpacity onPress={this.navigateToScreen('FAQ')}>
                        <Text>FAQ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};
export default SideMenu;
