import React from 'react';
import { AsyncStorage } from "react-native";

export const onSignIn = (email, password) => {
    return fetch('https://api.santiane.fr/etna/mobilecamp/login?filter={"login":"' + email + '","password":"' + password + '", "auto_refresh":1}')
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson["status"] === true) {
                AsyncStorage.setItem('email', email);
                AsyncStorage.setItem('password', password);
                return (true)
            } else if (responseJson["status"] === false) {
                return(false);
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
                if (res !== null && res !== "") {
                    AsyncStorage.getItem('password')
                        .then(res => {
                            if (res !== null && res !== "") {
                                resolve(true);
                            }
                            resolve(false);
                        })
                        .catch(err => reject(err));
                        resolve(true)
                } else {
                    resolve(false);
                }
                resolve(false);
            })
            .catch(err => reject(err));
    });
};