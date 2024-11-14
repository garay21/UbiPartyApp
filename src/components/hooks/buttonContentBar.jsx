import React from "react";
import {View, TouchableOpacity, Text} from "react-native"
import sliceBarStyle from "../styles/sliceBar.style";

const ButtonContent = (props)=>{
    return(
        <TouchableOpacity
            style={sliceBarStyle.button}
            onPress={() => props.nav(props.name)}
        >
            <Text style={sliceBarStyle.buttonText}>{props.title}</Text>
        </TouchableOpacity>   
    );
} 

export default ButtonContent;