import { urlBase } from "../config/config";

const url = "/placesCompanys/getLocation"; 

const getPlaceCompany = async (latitude, longitude)=> {
    try {
        const query = `?lat=${latitude}&lon=${longitude}`;   
        const res = await fetch(urlBase + url + query,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },    
        })
        .then(response => {
            if (!response.ok) {throw new Error('Network response was not ok');}
            return response.json();
        }).then(data => {return data})
        .catch(error => { return error})        
        return res;
        
    } catch (error) {
        console.error(error);
        return error;
    }
};

const EventManager = {
    getPlaceCompany,    
};

module.exports = EventManager;