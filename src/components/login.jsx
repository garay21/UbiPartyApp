import React , { useEffect, useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Image} from "react-native";
import { styleLogin } from "./styles/style.jsx";
import { handleLogin } from "./../api/handlesLogin.js";

import { logo1,logo2,logo3,logoLetter,logo4 } from "../assets/imgRoute.jsx";

const Login = ({navigation})=>{
    const [username,setUsername] = useState('');
    const [clave,setUserPassword] = useState('');

    const handleLoginButton = () => {
        // Llama a handlesLogin con los valores   
        handleLogin(username,clave,navigation);        
    };

    return (
        <View style={styleLogin.container}>
            <View>
                <Image source={logo4}
                    style={styleLogin.logoImg}
                ></Image>
                <Text style={styleLogin.appName}>Ubi Party</Text>
                {/* <Image source={logoLetter}
                    style={styleLogin.logoImgLetter}
                ></Image> */}
            </View>
            <TextInput
                style={styleLogin.input}
                placeHolder="nombre del usuario o e-mail"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styleLogin.input}
                placeholder="Contraseña"
                secureTextEntry
                value={clave}
                onChangeText={setUserPassword}
            />
            <TouchableOpacity style={styleLogin.button} onPress={handleLoginButton}>
                <Text style={styleLogin.buttonText}>Iniciar Sessión</Text>
            </TouchableOpacity>            
        </View>
    );
};

export default Login;