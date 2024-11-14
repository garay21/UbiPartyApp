import React, { Children, createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(null)

    useEffect(()=>{
        const loadAuthData = async () => {
            const apiKey = await AsyncStorage.getItem('apiKey')
            const userKey = await AsyncStorage.getItem('userKey')

            if(apiKey && userKey) setAuthData({apiKey,userKey})
            loadAuthData()
        }
    },[])

    const logIn = async (userData) => {
        try {
            await AsyncStorage.setItem('apiKey', userData.apiKey)
            await AsyncStorage.setItem('userKay', userData.userKey)
            setAuthData(userData)
        } catch (error) {
            console.log('logIn Provider Error');            
        }
    }

    const logOut = async () => {
        await AsyncStorage.clear()
        setAuthData(null)
    }
    
    return(
        <AuthContext.Provider value={{authData,logIn,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

