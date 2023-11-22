import React from "react";
import { View, TextInput, Text} from "react-native";
import { style } from "../styles/style";
import TopBar from "../topBar";

const Config = ({ navigation }) =>{
    return (
        <View style={style.container}>
            <TopBar draw={navigation}/>
            <Text>Config !!</Text>
        </View>
    ); 
};

export default Config;