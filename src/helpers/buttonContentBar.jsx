import React from "react";
import {View, TouchableOpacity, Text} from "react-native"
import { styleSliceBar } from "../components/styles/style.jsx";

const ButtonContent = (props)=>{
    return(
        <TouchableOpacity
            style={styleSliceBar.button}
            onPress={() => props.nav(props.name)}
        >
            <Text style={styleSliceBar.buttonText}>{props.title}</Text>
        </TouchableOpacity>   
    );
} 

export default ButtonContent;