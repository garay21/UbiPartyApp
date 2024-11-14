import { urlBase } from "../config/config";

export const createAccount = async (userData) => {    
    try {
        const result = await fetch(urlBase + '/signIn',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {throw new Error('Network response was not ok');}
            return response.json();
        }).then(data => {return data;})
        .catch(error => { return error;})    
        // return result
        return {'msg' : JSON.stringify(result)}
    }
    catch (error){
        return {'msg' : 'Error de servidor'}
    }
}