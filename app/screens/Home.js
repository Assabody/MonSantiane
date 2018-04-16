import React from "react";
import { StackNavigator } from 'react-navigation';
import { MyContracts } from './MyContracts';
import { ContractDetail } from './ContractDetail';
import { FontAwesome } from "react-native-vector-icons";
import { Project } from './../../faq';
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
            screen: Project,
            navigationOptions:({}) => ({
                title: "FAQ",
            })
        }
    },
    {
        initialRouteName: 'FirstScreen'
    });

export default stackNav;