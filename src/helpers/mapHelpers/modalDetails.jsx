import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const CustomModal = ({ isVisible, toggleModal , currentData}) => {
    
    if(isVisible){
        console.log(currentData, isVisible);
    }

    return (
    <Modal isVisible={isVisible} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
            <Text>Contenido del Modal</Text>
            
            <TouchableOpacity onPress={toggleModal}>
                <Text>Cerrar Modal</Text>
            </TouchableOpacity>
        </View>
    </Modal>
  );
};

export default CustomModal;