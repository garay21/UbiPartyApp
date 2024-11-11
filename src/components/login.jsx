import React , { useEffect, useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator, Image} from "react-native";
import { styleLogin } from "./styles/style.jsx";
import { handleLogin } from "./../api/handlesLogin.js";

import { logo1,logo2,logo3,logoLetter,logo4 } from "../assets/imgRoute.jsx";

const Login = ({navigation})=>{
    const [username, setUsername] = useState('');
    const [clave, setUserPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loginMessage, setMessage] = useState('')

    const handleLoginButton = async () => {
        // Llama a handlesLogin con los valores   
        setIsLoading(true)
        const {msg , auth} = await handleLogin(username,clave);
        setIsLoading(false)
        setMessage(msg)
        if(auth) navigation.navigate('Home')            
    };

    const changeCreateAcount = () => {
        navigation.navigate('SignIn')
    }

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
            <TouchableOpacity style={styleLogin.button}>
                <Text style={styleLogin.buttonText} onPress={changeCreateAcount}>Crear Usuario</Text>
            </TouchableOpacity>    
            {
                isLoading && (
                    <ActivityIndicator size="large" color="#0000ff"/>
                )
            }   
            {
                loginMessage && (
                    <Text>{loginMessage}</Text>
                )
            }                   
        </View>
    );
};

export default Login;