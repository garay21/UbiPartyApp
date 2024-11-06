import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image} from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';

import { styleMap } from '../styles/style';

import TopBar from "../topBar";
import SwitchColor from '../../helpers/mapHelpers/switchColor';
import CustomModal from '../../helpers/mapHelpers/modalDetails';

import { getPlaceCompany } from "./../../api/eventManager";
import getLocation from '../../helpers/mapHelpers/getLocation';
import { mapConfDark, mapConfLigth } from '../../config/map.config';
import IconCategory from '../../helpers/mapHelpers/iconManager';

const Maps = ({navigation}) => {
    //const exampleLocation = {latitude : -29.9897413, longitude : -71.3368313};
    const [currentLocation, setCurrentLocation] = useState(null);   
    const [data, setData] = useState(null);  
    const [currentData, setCurrentData] = useState(null);  
    const [colorMap , setColorMap] = useState(mapConfLigth);   
    const [modalVisible, setModalVisible] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(12); // Valor de zoom inicial

    const handleZoomChange = ({longitudeDelta}) => {           
        setZoomLevel(longitudeDelta)   
    };

    const toggleModal = (data) => {
        setModalVisible(!modalVisible);
    };
   
    const shangeColor = (isEnable)=>{ 
        setColorMap(!isEnable ? mapConfDark : mapConfLigth)
    }

    useEffect(() => {       
        // Llamar a la función para obtener la ubicación
        console.log("enter geolocation");
        
        getLocation().then(value => {            
            const lat = value.latitude;
            const lon = value.longitude;            
            getPlaceCompany(lat,lon).then(value =>{                
                setCurrentLocation({latitude: lat, longitude: lon});        
                setData(value[0]);
            });  
        }).catch(error =>{
            console.error("error al buscar la ubicacion del dispositivo : ",error);
        });          
    }, []); 
 
    return (
        <View style={styleMap.container}>
            <TopBar draw={navigation}/>     
            <SwitchColor change={shangeColor} />  
            <View style={styleMap.mapContainer}>
                {currentLocation ? (
                    <MapView
                        style={styleMap.map}
                        initialRegion={{
                            latitude: currentLocation.latitude,
                            longitude: currentLocation.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                        showsUserLocation={false}
                        showsPointsOfInterest={false}
                        customMapStyle={colorMap}
                        onRegionChangeComplete={handleZoomChange}
                        zoomEnabled={true}
                    >   
                    { zoomLevel <= 0.05 && data &&(
                         data.map(value =>{
                            //console.log(value);
                            return <Marker
                                style={{ width: 32, height: 32 }}
                                coordinate={{ latitude: value.latitude, longitude: value.longitude }}
                                title={value.place_name}
                                description={value.descript}
                                key={value.id}
                                onPress={(data)=>{
                                    setCurrentData(value);
                                    toggleModal();                                    
                                }}
                                anchor={{ x: 0.5, y: 0.5 }}
                            >
                                <Image source={IconCategory(value.fk_category)} style={styleMap.iconMarker} />
                            </Marker>  
                        })
                    )}                                       
                    </MapView>                   

                ) : (
                    <Text>Obteniendo ubicación...</Text>
                )}  

                <CustomModal isVisible={modalVisible} toggleModal={toggleModal} currentData={currentData}/>

            </View>              
        </View>
    );
};

export default Maps;


