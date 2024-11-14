import React , { useEffect, useState } from "react";
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator, Image} from "react-native";
import { handleLogin } from "./../api/handlesLogin.js";
import { useAuth } from "./providers/loginProvider.jsx";
import loginStyle from "./styles/login.style.jsx";

import { logo1,logo2,logo3,logoLetter,logo4 } from "../assets/imgRoute.jsx";

const Login = ({navigation})=>{
    const [username, setUsername] = useState('');
    const [clave, setUserPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loginMessage, setMessage] = useState('')

    //const {authData , logIn} = useAuth()

    const handleLoginButton = async () => {
        // Llama a handlesLogin con los valores  
        setIsLoading(true)
        const {msg , auth} = await handleLogin(username,clave);
        setIsLoading(false)
        setMessage(msg)
        if(auth) {
            navigation.navigate('Home')
        }            
    };

    const changeCreateAcount = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={loginStyle.container}>
            <View>
                <Image source={logo4}
                    style={loginStyle.logoImg}
                ></Image>
                <Text style={loginStyle.appName}>Ubi Party</Text>
                {/* <Image source={logoLetter}
                    style={styleLogin.logoImgLetter}
                ></Image> */}
            </View>
            <TextInput
                style={loginStyle.input}
                placeHolder="nombre del usuario o e-mail"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={loginStyle.input}
                placeholder="Contraseña"
                secureTextEntry
                value={clave}
                onChangeText={setUserPassword}
            />
            <TouchableOpacity style={loginStyle.button} onPress={handleLoginButton}>
                <Text style={loginStyle.buttonText}>Iniciar Sessión</Text>
            </TouchableOpacity>          
            <TouchableOpacity style={loginStyle.button} onPress={changeCreateAcount}>
                <Text style={loginStyle.buttonText} >Crear Usuario</Text>
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