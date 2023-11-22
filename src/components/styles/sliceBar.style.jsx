import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "./colors";

export default styleSliceBar = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingVertical: 20,
            paddingHorizontal: 20,
            paddingTop : 40,
            paddingBottom : 10,
            backgroundColor: colors.backgroundColor,
            marginTop : Constants.statusBarHeight,
        },
        button: {
            marginBottom: 20,
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: colors.primaryOpacity,
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
        },
        buttonText: {
            fontSize: 18,
            color : colors.primaryFont,
        },
        drawerHeader: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            backgroundColor: colors.backgroundColor,
        },
        drawerHeaderText: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom : 20,            
            color : "black",
        },
        logoutButton: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        logoutText: {
            marginLeft: 10,
            fontSize: 18,
            color: '#00A6A6', // Color de botón destacado
        },
        closeButton: {
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-end', // Alinear al extremo derecho
            marginTop: 20, // Espacio entre el contenido y el botón de cierre
        },
        closeButtonText: {
            fontSize: 18,
            color: '#00A6A6', // Color de botón destacado
        },
    }
);