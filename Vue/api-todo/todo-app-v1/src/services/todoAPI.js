import { http } from "./service";

//realizando a comunicação com a API

export default {
    // baseURL="http://localhost:8000/api/",

    pegar_todas_tarefas: () => {
        return http.get('tasks');
    },

    salvar_tarefa: (task) => {
        return http.post('tasks', task);
    },

    pegar_todas_tarefas_concluidas: () => {
        return http.get('tasks/completed');
    },

    pegar_todas_tarefas_nao_concluidas: () => {
        return http.get('tasks/uncompleted');
    },

    atualizar_status_tarefa: (corrente) => {
        return http.put('tasks/status', { id: corrente.id });
    },

    apagar_tarefa: (corrente) => {
        return http.delete('tasks', { data: corrente });
    },

    atualizar_tarefa: (task) => {
        return http.put('tasks', { id: task.id, title: task.title, description: task.description, categorie_name: task.categorie_name });
    },

    salvar_categoria: (categorie) => {
        return http.post('categories', categorie);
    },

    pegar_todas_categorias: () => {
        return http.get('categories');
    },



}
