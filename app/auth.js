import React, {Component} from 'react';
import { AsyncStorage } from "react-native";
import SignIn from "./screens/SignIn";
import ProjectNavigator from './StackNavigator';

export const USER_KEY = "auth-demo-key";

export const onSignIn = () => {
    //todo récupérer les datas des inputs
    var login = "";
    var pwd = "";
    fetch('https://api.santiane.fr/etna/mobilecamp/login?filter={"login":"' + login + '","password":"' + pwd + '", "auto_refresh":1}')
        .then((response) => response.json())
        .then((responseJson) => {
            var retour = JSON.parse(JSON.stringify(eval("(" + responseJson + ")")));
            if (retour.status === true) {
                AsyncStorage.setItem(USER_KEY, responseJson);
                //todo rediriger vers la liste des contrats
            } else {
                //todo mettre un message
            }
            this.setState({
                isLoading: false,
                dataSource: JSON.parse(JSON.stringify(eval("(" +responseJson.value+ ")"))),
            }, function(){

            });

        })
        .catch((error) =>{
            console.error(error);
        });
};

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};