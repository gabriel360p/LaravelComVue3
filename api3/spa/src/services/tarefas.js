import { http } from "./config";

export default{
    // baseURL: 'http://localhost:8000/api/'
    
    
    // metodos que abrigam as requisições
    listar_tarefas:()=>{
        return http.get('tasks');    
    },

    // metodos que abrigam as requisições
    salvar_tarefa:(tarefa)=>{
        return http.post('tasks',tarefa);    
    },

    // metodos que abrigam as requisições
    apagar_tarefa:(tarefa)=>{
        return http.delete('tasks',{data : tarefa});    
    },

    // metodos que abrigam as requisições
    atualizar_tarefa:(tarefa)=>{
        return http.put('tasks',{ id:tarefa.id, task:tarefa.task, desc:tarefa.desc});    
    },



    
    // metodos que abrigam as requisições
    concluir_tarefa:(tarefa)=>{
        return http.put('tasks/marked',{ id:tarefa.id});    
    },
    
    // metodos que abrigam as requisições
    reabrir_tarefa:(tarefa)=>{
        return http.put('tasks/unmarked',{ id:tarefa.id});    
    },


}