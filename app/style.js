import {StyleSheet} from "react-native";

export default StyleSheet.create(
    {
        MainContainer:
            { justifyContent: 'center',

                flex:1,
                margin: 10
            },

        TextStyle:
            {
                fontSize: 18,
                paddingBottom: 3,
                // textAlign: 'center',
                color: '#000',
            },

        TextStyleDetails:
            {
                fontSize: 17,
                paddingBottom: 5,
                // textAlign: 'center',
                color: '#000',
            },

        TitleStyle:
            {
                fontSize: 24,
                textAlign: 'center',
                color: '#000',
                paddingBottom: 10,
            },
        container:
            {
                flex: 1,
                backgroundColor: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
            },
        buttonClick:
            {
                flex: 1,
                backgroundColor: '#F57E20',
            }
    });