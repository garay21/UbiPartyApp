import React, { useEffect, useState } from "react";
import { PermissionsAndroid } from 'react-native';
import { savePermissionPreference, getPermissionPreference } from "./saveAndGetPermission";
import { getPlataform } from "../../config/config";

const requestLocationPermission = async ()=>{
    try {
        const permissionKey = getPlataform() === 1 ? PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION : "";
        const isPermissionSaved = await getPermissionPreference(permissionKey);

        if(!isPermissionSaved){
            //pregunta si acepta o denega permiso 
            const granted = await PermissionsAndroid.request(
                permissionKey,
                {
                    title: 'Permiso de Ubicación',
                    message: 'La aplicación necesita acceder a tu ubicación.',
                    buttonPositive: 'Aceptar',
                    buttonNegative: 'Denegar'
                }
            );
                
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                savePermissionPreference(permissionKey,true);
                console.log('Permiso de ubicación concedido');
            } else {
                savePermissionPreference(permissionKey,false);
                console.log('Permiso de ubicación denegado');
            }
        }
        
     } catch (error) {
        console.warn(error);
    }
}

export default requestLocationPermission;