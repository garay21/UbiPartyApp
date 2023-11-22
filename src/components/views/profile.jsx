import React from "react";
import { View, TextInput, Text} from "react-native";
import { style } from "../styles/style";
import TopBar from "../topBar";

const Profile = ({navigation}) =>{
    return (
        <View style={style.container}>
            <TopBar draw={navigation}/>
            <Text>Profile !!</Text>
        </View>
    ); 
};

export default Profile;