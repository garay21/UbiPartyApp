import React from "react";
import {View, TouchableOpacity, Text} from "react-native"
import sliceBarStyle from "../styles/sliceBar.style.jsx";
import ButtonContent from "../hooks/buttonContentBar.jsx";

const Content = ({additionalVariable, navigation}) => {

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    const mainNav = additionalVariable;

    return (
        <View style={sliceBarStyle.container}>
            <View style={sliceBarStyle.drawerHeader} >
                <Text style={sliceBarStyle.drawerHeaderText}>@ Menu Ubi Party</Text>
            </View>       
            <ButtonContent name="Main" title="Home" nav={navigateToScreen}/>     
            <ButtonContent name="map" title="Mapa" nav={navigateToScreen}/>   
            <ButtonContent name="user" title="Profile" nav={navigateToScreen}/>   
            <ButtonContent name="app" title="About" nav={navigateToScreen}/>   
            <ButtonContent name="conf" title="Config" nav={navigateToScreen}/>      
            <TouchableOpacity style={sliceBarStyle.closeButton} onPress={() => navigation.closeDrawer()}>
                <Text style={sliceBarStyle.closeButtonText}>Cerrar Barra Lateral</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={sliceBarStyle.logoutButton} onPress={() => mainNav.navigate('Login')}>
                <Text style={sliceBarStyle.logoutText}>Cerrar sesion</Text>
            </TouchableOpacity> 
        </View>
    );
};

export default Content;