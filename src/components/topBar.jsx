import React from "react";
import { View,Text,TouchableOpacity, } from "react-native";
import { styleTopBar } from "./styles/style";

const TopBar = (props) => {
  
    const openDraw = ()=>{
        props.draw.openDrawer();
    }

    return (
        <View style={styleTopBar.headerContainer}>
            <TouchableOpacity                
                onPress={openDraw}
            >
                <Text>☰</Text>
            </TouchableOpacity>  
            
            <Text>Ubi Party</Text>
            <Text></Text>
        </View>
    );
};

export default TopBar;