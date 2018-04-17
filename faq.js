import React from 'react';
import {StackNavigator} from "react-navigation";
import {ConsultationActivity} from "./app/faq/ConsultationActivity";
import {ConnexionActivity} from "./app/faq/ConnexionActivity";
import {ActivationActivity} from "./app/faq/ActivationActivity";
import {Home} from "./app/faq/Home";

export const FaqNavigator = StackNavigator(
    {
        Home: { screen: Home },

        Activation: { screen: ActivationActivity },

        FaqConnect: { screen: ConnexionActivity },

        Consultation: { screen: ConsultationActivity }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        navigationOptions:({}) => ({
            headerVisible: false,
        })
    }
);