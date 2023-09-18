import { http } from "./Config";

export default{

    listar_itens:()=>{
        return http.get('/itens/list');
    },

    buscar_iten:(id)=>{
        return http.get('/itens/show',{params:{'id':id}});
    },

    // /itens/update

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

    atualizar_item:(iten)=>{
        return http.put('/itens/update',{id:iten.id,name:iten.name,categorie:iten.categorie,place:iten.place,more:iten.more});
    },

    devolvidos_itens:()=>{
        return http.get('/itens/refounds');
    },
 
}