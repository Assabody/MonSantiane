import React from 'react';
import {StackNavigator} from "react-navigation";
import {ConsultationActivity} from "./app/faq/ConsultationActivity";
import {ConnexionActivity} from "./app/faq/ConnexionActivity";
import {ActivationActivity} from "./app/faq/ActivationActivity";
import {Home} from "./app/faq/Home";
import {ActivationEspace} from "./app/faq/Activation/ActivationEspace";
import {LoseId} from "./app/faq/Activation/LoseId";
import {ActivationIssues} from "./app/faq/Activation/ActivationIssues";
import {ConnectSpace} from "./app/faq/Connexion/ConnectSpace";
import {LoseConnectID} from "./app/faq/Connexion/LoseConnectID";
import {ConnectionIssues} from "./app/faq/Connexion/ConnectionIssues";
import {ChangeMail} from "./app/faq/Connexion/ChangeMail";
import {SeeContrat} from "./app/faq/Consultation/SeeContrat";
import {Refund} from "./app/faq/Consultation/Refund";
import {WrongInformation} from "./app/faq/Consultation/WrongInformation";

export const FaqNavigator = StackNavigator(
    {
        Home: { screen: Home },

        Activation: { screen: ActivationActivity },

        FaqConnect: { screen: ConnexionActivity },

        Consultation: { screen: ConsultationActivity },

        ActivationSpace: { screen: ActivationEspace },

        LoseId: { screen: LoseId },

        ActivationIssues: { screen: ActivationIssues },

        ConnectSpace: { screen: ConnectSpace},

        LoseConnectID: { screen: LoseConnectID},

        ConnectionIssues: { screen: ConnectionIssues},

        ChangeMail: { screen: ChangeMail},

        SeeContrat: { screen: SeeContrat},

        Refund: { screen: Refund},

        WrongInformation: { screen: WrongInformation},
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        navigationOptions:({}) => ({
            headerVisible: false,
        })
    }
);