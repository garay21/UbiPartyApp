import React from "react";
import {View, TouchableOpacity, Text} from "react-native"
import { styleSliceBar } from "../components/styles/style.jsx";
import ButtonContent from "./buttonContentBar.jsx";

const Content = ({additionalVariable, navigation}) => {

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    const mainNav = additionalVariable;

    return (
        <View style={styleSliceBar.container}>
            <View style={styleSliceBar.drawerHeader} >
                <Text style={styleSliceBar.drawerHeaderText}>@ Menu Ubi Party</Text>
            </View>       
            <ButtonContent name="Main" title="Home" nav={navigateToScreen}/>     
            <ButtonContent name="map" title="Mapa" nav={navigateToScreen}/>   
            <ButtonContent name="user" title="Profile" nav={navigateToScreen}/>   
            <ButtonContent name="app" title="About" nav={navigateToScreen}/>   
            <ButtonContent name="conf" title="Config" nav={navigateToScreen}/>      
            <TouchableOpacity style={styleSliceBar.closeButton} onPress={() => navigation.closeDrawer()}>
                <Text style={styleSliceBar.closeButtonText}>Cerrar Barra Lateral</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styleSliceBar.logoutButton} onPress={() => mainNav.navigate('Login')}>
                <Text style={styleSliceBar.logoutText}>Cerrar sesion</Text>
            </TouchableOpacity> 
        </View>
    );
};

export default Content;