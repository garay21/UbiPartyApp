import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PermissionsAndroid,} from 'react-native';
import { getPlataform } from "./../config/config";

export const savePermissionPreference = async (permissionKey, granted) => {   
    try {
        const preferenceKey = `@MyApp:${permissionKey}`;

        switch(getPlataform()){
            case 0: 
                // Para aios 
                await AsyncStorage.setItem(permissionKey, granted ? 'granted' : 'denied');
                break;
            case 1:
                // para android
                await PermissionsAndroid.requestMultiple([permissionKey]);
                await AsyncStorage.setItem(preferenceKey, granted ? 'granted' : 'denied');
                break;
        }

    } catch (error) {
        console.error('Error al guardar la preferencia del permiso:', error);
    }
};

export const getPermissionPreference = async (permissionKey) => {
    try {
        const preferenceKey = `@MyApp:${permissionKey}`;

        const value = await AsyncStorage.getItem(preferenceKey);
        
        return value === 'granted';

    } catch (error) {
        console.error('Error al obtener la preferencia del permiso:', error);
        return false;
    }
};
