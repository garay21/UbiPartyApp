import {
    deporte,disco,bar,karaoke,divercion,espectaculo,automo,mecanica
} from "../../assets/imgRoute";

const IconCategory = (category)=>{    
    switch(category){
        case 1: return deporte;
        case 2: return disco
        case 3: return bar
        case 4: return karaoke
        case 5: return divercion
        case 6: return espectaculo 
        case 7: return automo 
        case 8: return mecanica
        default : break; 
    }
};

export default IconCategory;