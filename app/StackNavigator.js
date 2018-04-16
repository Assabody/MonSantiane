import {StackNavigator} from "react-navigation";
import {MyContracts} from "./screens/MyContracts";
import {ActivationActivity} from "./faq/ActivationActivity";
import {ConnexionActivity} from "./faq/ConnexionActivity";
import {ConsultationActivity} from "./faq/ConsultationActivity";

const ProjectNavigator = StackNavigator(
    {
        ListContracts: { screen: MyContracts },

        Activation: { screen: ActivationActivity },

        FaqConnect: { screen: ConnexionActivity },

        Consultation: { screen: ConsultationActivity }
    }
);