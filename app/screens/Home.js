import React from "react";
import { StackNavigator } from 'react-navigation';
import { MyContracts } from './MyContracts';
import { ContractDetail } from './ContractDetail';
import { FontAwesome } from "react-native-vector-icons";
import { FaqNavigator } from './../../faq';
import { Asktorefund } from './Asktorefund';
import { Documents } from './Documents';
import { Insured } from './Insured';
import Signin from './SignIn';

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
        },
        Asktorefund: {
            screen: Asktorefund,
            navigationOptions:({}) => ({
                title: "Mes remboursements",
            })
        },
        Documents: {
            screen: Documents,
            navigationOptions:({}) => ({
                title: "Mes Documents",
            })
        },
        Insured: {
            screen: Insured,
            navigationOptions:({}) => ({
                title: "Bénéficiaires",
            })
        },
        Signin: {
            screen: Signin,
            navigationOptions: ({}) => ({
                title: "Connexion"
            })
        }
    },
    {
        initialRouteName: 'FirstScreen'
    });

export default stackNav;