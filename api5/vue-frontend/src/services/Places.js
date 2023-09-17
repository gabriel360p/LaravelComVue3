import { http } from "./Config"

export default{

    salvar_lugar:(place)=>{
        return http.post('/places/store',place);
    },

    listar_lugares:()=>{
        return http.get('/places/list');
    }

}