import React from "react";
import { View, TextInput, Text} from "react-native";
import { style } from "../styles/style";

import TopBar from "../topBar";

const Home = ({ navigation }) => {
    return (
        <View style={style.container}>
            <TopBar draw={navigation}/>
            <Text style={style.textExample}>Hola mundo, bienvenido a ubi party !!</Text>
        </View>
    ); 
};

export default Home;