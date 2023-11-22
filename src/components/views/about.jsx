import React from "react";
import { View, TextInput, Text} from "react-native";
import { style } from "../styles/style";
import TopBar from "../topBar";

const About = ({ navigation }) =>{
    return (
        <View style={style.container}>
            <TopBar draw={navigation}/>
            <Text>About !!</Text>
        </View>
    ); 
};

export default About;