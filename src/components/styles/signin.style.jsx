import { StyleSheet } from "react-native";
import colors from "./colors";
import Constants from "expo-constants";

export default styleSignIn = StyleSheet.create(
    {
        formContainer: {
            flex: 1,
            alignItems : 'center',
            justifyContent:'space-between',
            backgroundColor: colors.backgroundColorLogin,
            width: '100%',
            height: '100%',
            paddingBottom : 30
        },
        inputContainer: {    
            flex:1,
            alignItems : 'center',        
            margin : 0,
            padding : 0,
            width: '100%',       
            minHeight : 90   
        },
        label: {
            fontSize: 16,
            color: colors.black,
            marginBottom: 8,
            textAlign: 'left'
        },
        input: {
            width: '80%',
            height: 40,
            borderColor: '#ccc',
            borderWidth: 1,
            paddingLeft: 8,
            borderRadius: 4,
        },
        errorText: {
            color: 'red',
            fontSize: 12,
            marginTop: 4,
        },
    }
)