import React from "react";
import { View, TextInput, Text} from "react-native";
import { styleApp } from "../styles/style";

import TopBar from "../topBar";

const Home = ({ navigation }) => {
    return (
        <View style={styleApp.container}>
            <TopBar draw={navigation}/>
            <Text style={styleApp.textExample}>Hola mundo, bienvenido a ubi party !!</Text>
        </View>
    ); 
};

export default Home;