import {StackNavigator} from "react-navigation";
import {MyContracts} from "./screens/MyContracts";
import {SignIn} from "./screens/SignIn";
import {ActivationActivity} from "./faq/ActivationActivity";
import {ConnexionActivity} from "./faq/ConnexionActivity";
import {ConsultationActivity} from "./faq/ConsultationActivity";

export const ProjectNavigator = StackNavigator(
    {
        ListContracts: { screen: MyContracts },

        Connexion: { screen: SignIn },

        Activation: { screen: ActivationActivity },

        FaqConnect: { screen: ConnexionActivity },

        Consultation: { screen: ConsultationActivity }
    }
);