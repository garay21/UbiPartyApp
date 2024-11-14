import React from "react";
import { View,Text,TouchableOpacity, } from "react-native";

import { createDrawerNavigator } from '@react-navigation/drawer';

import Content from "./hooks/contentSliceBar.jsx";

import Main from "./main.jsx";

const Drawer = createDrawerNavigator();

const SliceBar = ({navigation})=>{

    const mainNav = navigation;

    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false, // Ocultar la barra superior predeterminada
          }} drawerContent={props => <Content {...props} 
            additionalVariable={mainNav}
            gestureEnabled={false}/>}>            
            <Drawer.Screen name="Main" component={Main.Home}/>
            <Drawer.Screen name="map" component={Main.Maps}/>
            <Drawer.Screen name="user" component={Main.Profile}/>
            <Drawer.Screen name="app" component={Main.About}/>
            <Drawer.Screen name="conf" component={Main.Config}/>
        </Drawer.Navigator>
    );
};

export default SliceBar;