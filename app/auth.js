import React from 'react';
import { AsyncStorage } from "react-native";

export const onSignIn = (email, password) => {
    console.log("Email: " + email + " Password: " + password);
    //todo récupérer les datas des inputs
    return fetch('https://api.santiane.fr/etna/mobilecamp/login?filter={"login":"' + email + '","password":"' + password + '", "auto_refresh":1}')
        .then((response) => response.json())
        .then((responseJson) => {
           // var retour = JSON.parse(JSON.stringify(eval("(" + responseJson + ")")));
            if (responseJson["status"] === true) {
                AsyncStorage.setItem('email', email);
                AsyncStorage.setItem('password', password);
                alert("Connection success")
                //todo rediriger vers la liste des contrats
            } else if (responseJson["status"] === false) {
                alert("Bad credentials");
                //todo mettre un message
            }
        })
        .catch(function(err) {
            console.log("Error: " + err);
        })
};

export const onSignOut = () => {
    return AsyncStorage.removeItem('email') && AsyncStorage.removeItem('password');
};

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('email')
            .then(res => {
                if (res !== null) {
                    console.log("Email: " + AsyncStorage.getItem('email'));
                    AsyncStorage.getItem('password')
                        .then(res => {
                            if (res !== null && res !== "") {
                                console.log("Password: " + AsyncStorage.getItem('password'));
                                resolve(true);
                            }
                        })
                        .catch(err => reject(err));
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};