import React from "react";
import { View,Text,TouchableOpacity, } from "react-native";

import topBarStyle from "./styles/topBar.style";

const TopBar = ({draw}) => {
  
    const openDraw = ()=>{
        draw.openDrawer();
    }

    return (
        <View style={topBarStyle.headerContainer}>
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