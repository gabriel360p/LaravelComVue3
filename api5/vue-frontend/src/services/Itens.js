import { http } from "./Config";

export default{

    listar_itens:()=>{
        return http.get('/itens/list');
    },

    salvar_item:(iten)=>{
        return http.post('/itens/store',iten);
    }

    
}