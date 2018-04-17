import React from "react";
import { StackNavigator } from 'react-navigation';
import { MyContracts } from './MyContracts';
import { ContractDetail } from './ContractDetail';
import { FontAwesome } from "react-native-vector-icons";
import { FaqNavigator } from './../../faq';
import { Asktorefund } from './Asktorefund';
import { Documents } from './Documents';
import { Insured } from './Insured';

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
        },
        Documents: {
            screen: Documents,
        },
        Insured: {
            screen: Insured,
        }
    },
    {
        initialRouteName: 'FirstScreen'
    });

export default stackNav;