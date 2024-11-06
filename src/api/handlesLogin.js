import { urlBase } from "../config/config";

export const handleLogin = async(username,clave,navigation) => {
    // Aquí agregarás la lógica de autenticación   
    console.log("enter hangle login");
    
    
    try {
        const res = await fetch(urlBase + "/login", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"userName": username,"clave": clave}), 
        }) 
        .then(response => {
            if (!response.ok) {throw new Error('Network response was not ok');}
            return response.json();
        }).then(data => {return data;})
        .catch(error => { return error;})      

        //console.log(res);

        if(res != undefined ){
            if(res.auth === "success"){
                navigation.navigate('Home');
            }            
            else{
                console.log("Usuario incorrecto !!" , res);                
                navigation.navigate('Home');
            }
        }
        else{
            console.error("error de response !!");
        }        
        
    } catch (error) {
        // Manejar errores de solicitud
        console.error("Error ", error);        
    }
};