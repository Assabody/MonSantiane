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
                color: '#000',
            },

        TextStyleDetails:
            {
                fontSize: 17,
                paddingBottom: 5,
                // textAlign: 'center',
                color: '#000',
            },

        TextStyleRefunds:
            {
                fontSize: 16,
                paddingBottom: 3,
                // textAlign: 'center',
                color: 'gray',
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
                fontSize: 16,
            },
        buttonText: {
            color: '#ffffff',
            fontSize: 18,
            textAlign: 'center',
            },
        TextLink:
            {
                color: '#F57E20',
            },
        FaqTitleStyle:
            {
                fontSize: 24,
                textAlign: 'center',
                color: '#000',
                paddingBottom: 10,
                marginTop: 10,
            },
        FaqTextStyle:
            {
                fontSize: 20,
                paddingBottom: 3,
                color: '#000',
            },
        FaqAdStyle:
            {
                fontSize: 20,
                paddingBottom: 3,
                color: '#000',
                fontWeight: 'bold'
            },
        FaqButtonClick:
            {
                flex: 1,
                backgroundColor: '#F57E20',
                marginTop: 15,
            },
    });