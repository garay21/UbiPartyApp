import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { styleApp } from '../../components/styles/style';

const SwitchColor = (props)=>{
    const [isEnable , setEnable] = useState(false);
    
    const sw = ()=>{
        props.change(isEnable);
        setEnable(isEnable => !isEnable);        
    }

    return(
        <View style={styleApp.switchContainer}>
            <Switch
                trackColor={{false : "grey", true: "black"}}
                thumbColor={isEnable ? "black":"white"}
                onValueChange={sw}
                value={isEnable}
            />
        </View>
    );
};

export default SwitchColor;



