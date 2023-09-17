import { http } from "./Config";

export default{

    salvar_categoria:(categorie)=>{
       return http.post('/categories/store',categorie)
    },

    listar_categorias:()=>{
        return http.get('/categories/list')
    },


}