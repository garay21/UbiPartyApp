import * as Location from 'expo-location';

const getLocation = async () => {
    try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        //console.log(status);
        if (status === 'granted') {
            // El usuario consedio el permiso 
            const locationResult = await Location.getCurrentPositionAsync({})                   
            return locationResult.coords;
        }
        else{
            throw new Error('Permiso denegado !!!')
        }
    } catch (error) {
        console.error('Error al obtener la ubicación:', error);
    }
}; 

export default getLocation;