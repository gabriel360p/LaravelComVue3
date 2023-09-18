import { http } from "./Config";

export default{    
    // metodos que abrigam as requisições

    listar_tarefas:()=>{
        return http.get('/tarefas/all');    
    },

    listar_tarefas_concluidas:()=>{
        return http.get('/tarefas/markeds');    
    },

    show_tarefa:(id)=>{
        return http.get('/tarefas/show', { params: {id: id}})
    },

    salvar_tarefas:(tarefa)=>{
        return http.post('/tarefas/store',tarefa);    
    },

    deletar_tarefa:(tarefa)=>{
        
        return http.delete('/tarefas/delete', {data:tarefa});    
    },
    
    concluir_tarefa:(id)=>{
        return http.put('/tarefas/marked', {id:id});    
    },

    reabrir_tarefa:(id)=>{
        return http.put('/tarefas/unmarked', {id:id});    
    },
    
    atualizar_tarefa:(tarefa)=>{
        return http.put('/tarefas/update', {title:tarefa.title,task:tarefa.task,id:tarefa.id,});    
    },

}

