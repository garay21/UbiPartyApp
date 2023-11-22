import { StyleSheet } from "react-native";
import colors from "./colors";
import Constants from "expo-constants";

export default styleLogin = StyleSheet.create(
    {
        container: {         
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.backgroundColorLogin,
            marginTop : Constants.statusBarHeight,
        },
        input: {
            width: '80%',
            height: 50,
            borderRadius: 10,
            marginBottom: 15,
            paddingLeft: 20,
            paddingHorizontal: 15,
            backgroundColor: "white"
        },
        button : {           
            width: '80%',
            borderRadius: 10,
            height: 50,   
            marginBottom: 10,
            paddingLeft: 0,
            justifyContent: 'center',
            backgroundColor: colors.primaryOpacity,
        },
        encabesado : {
            color: colors.primaryFont,
            fontSize: 30,
            marginTop: 20,
            fontWeight: '600',
            padding: 10,
            paddingRight: 0,
            textAlign: 'center',
        },
        bodyContainer : {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.backgroundColorMainMenu,
        },
        buttonText: {
            fontSize: 18,
            color: colors.primaryFont,
            textAlign: 'center',
        },
        logoImg : {
            width:150,
            height:150,  
            marginBottom: 0,
            marginBottom: 19, 
        },  
        appName: {
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            paddingBottom: 20,
        },
    }
);