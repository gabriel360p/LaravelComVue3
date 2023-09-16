import { http } from "./Config";

export default{    
    // metodos que abrigam as requisições
    listar_tarefas:()=>{
        // return http.get('tasks');    
    },
    
    show_tarefa:(id)=>{
        return http.get('/tarefas/show', {
            params: {
                id: id
            }
        })
    },



    
}
