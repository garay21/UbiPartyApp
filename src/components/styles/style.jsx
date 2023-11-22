import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "./colors";
import styleLogin from "./login.style";
import styleSliceBar from "./sliceBar.style";
import styleTopBar from "./topBar.style"

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.backgroundColorMainMenu,
            marginTop : Constants.statusBarHeight,
        },
        textExample: {
            color: "black",
        },      
        switchContainer: {
            position: 'absolute',
            top: "6%", // Ajusta la posición vertical del Switch
            left: "87%", // Ajusta la posición horizontal del Switch
            backgroundColor: colors.backgroundColorMainMenu,
            padding: 0,
            borderRadius: 10,
            elevation: 0,
        },  
    }
); 
const styleLogo = StyleSheet.create(
    {
        logoContainer : {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",            
        },
        logoImg : {
            width:150,
            height:150,   
        }
    }
);

const styleMap = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColorMainMenu,
        marginTop : Constants.statusBarHeight,
    },
    textExample: {
        color: "black",
    },
    map: {
        width: '100%',
        height: '100%',     
    },
    mapContainer:{
        marginTop: 100,     
        flex : 1,     
        width: '100%',
        height: '100%',       
        backgroundColor: colors.backgroundColorMainMenu,
        padding : 0,

    },
    switchContainer: {
        position: 'absolute',
        top: "6%", // Ajusta la posición vertical del Switch
        left: "87%", // Ajusta la posición horizontal del Switch
        backgroundColor: colors.backgroundColorMainMenu,
        padding: 0,
        borderRadius: 10,
        elevation: 0,
    },  
    iconMarker :{
        width: '100%',   
        height: '100%',          
    },
    marker:{
        width:10,
        height:10,
    }}
);

module.exports = {
    style,
    styleLogin,
    styleSliceBar,
    styleTopBar,
    styleLogo,
    styleMap,
}