import React from "react";
import { Platform, StatusBar } from "react-native";
import {
    StackNavigator,
    TabNavigator,
    SwitchNavigator, TabBarBottom
} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import FaqNavigator from "../faq";

const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = StackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: "Sign In",
            headerStyle
        }
    }
});

export const SignedIn = TabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: "Home"
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: "Profile"
            }
        }
    },
    {
        tabBarOptions: {
            style: {
                margin: 0,
                paddingBottom: 20
                // height: Platform.OS === "android" ? 70 : 44
            }
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);

export const createRootNavigator = (signedIn = false) => {
    return SwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};