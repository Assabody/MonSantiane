import React from "react";
import { StackNavigator } from 'react-navigation';
import { MyContracts } from './MyContracts';
import { ContractDetail } from './ContractDetail';
import { FontAwesome } from "react-native-vector-icons";
import { FaqNavigator } from './../../faq';

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
            screen: FaqNavigator,
        }
    },
    {
        initialRouteName: 'FirstScreen'
    });

export default stackNav;