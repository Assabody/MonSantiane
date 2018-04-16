import React from "react";
import { StackNavigator } from 'react-navigation';
import { MyContracts } from './MyContracts';
import { ContractDetail } from './ContractDetail';
import { FontAwesome } from "react-native-vector-icons";
import { Faq } from './../../faq';
const stackNav = StackNavigator(
    {
        FirstScreen: {
            screen: MyContracts,
        },
        ContractDetail: {
            screen: ContractDetail,
            navigationOptions:({}) => ({
                title: "Contrat",
            })
        },
        FAQ: {
            screen: Faq,
            navigationOptions:({}) => ({
                title: "FAQ",
            })
        }
    },
    {
        initialRouteName: 'FirstScreen'
    });

export default stackNav;