import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./login.jsx";
import SliceBar from "./sliceBar.jsx";

const Stack = createNativeStackNavigator();

const Routes = () => {  
    return (        
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={SliceBar} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
  
export default Routes;
