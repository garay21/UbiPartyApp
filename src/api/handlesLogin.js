import { urlBase } from "../config/config";

export const handleLogin = async(username,psw) => {    
    try {
        const res = await fetch(urlBase + "/login", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"u_name": username,"u_password": psw}), 
        }) 
        .then(response => {
            if (!response.ok) {throw new Error('Network response was not ok');}
            return response.json();
        }).then(data => {return data;})
        .catch(error => { return error;})      
        
        if(res.msg != undefined){
            if(res.msg === "success"){               
                return {'msg' : 'Usuario Correcto.' , 'auth' : true}
            }            
            else {     
                return {'msg' : 'Usuario o contraseña incorrectos.', 'auth' : false}
            }
        }
        else{
            return { 'msg' : 'Error de respuesta.' + res, 'auth' : false}
        }        
        
    } catch (error) {
        return {'msg' : 'Error de servidor.', 'auth' : false}    
    }
};