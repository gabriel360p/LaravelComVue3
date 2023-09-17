import { http } from "./Config";

export default{

    listar_itens:()=>{
        return http.get('/itens/list');
    },

    salvar_item:(iten)=>{
        return http.post('/itens/store',iten);
    },

    deletar_item:(iten)=>{
        return http.delete('/itens/delete',{data:iten});
    },

    devolver_item:(iten)=>{
        return http.put('/itens/refound',{id:iten.id});
    },

    reabrir_item:(iten)=>{
        return http.put('/itens/reopen',{id:iten.id});
    },

    devolvidos_itens:()=>{
        return http.get('/itens/refounds');
    },
 
}