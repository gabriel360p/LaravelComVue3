<template>	
    <div class="container">

        <div class="row">
            <div class="col">
                <div class="row">
                    <span class="">Atividades Disponiveis:</span>
                    
                    <div class="card mt-3 p-3" v-for="tarefa in tarefas" :key="tarefa.id">
                        <form @submit.prevent="">
                                {{ tarefa.task }}

                                <div class="card-body">

                                    <div class="mb-3">
                                        <label for="" class="form-label">Tarefa</label>
                                        <input type="text"
                                            class="form-control" name="task" v-model="tarefa.task" aria-describedby="helpId" placeholder="">
                                    </div>

                                    <div class="mb-3">
                                        <label for="" class="form-label">Descrição</label>
                                        <input type="text"
                                            class="form-control" name="desc" v-model="tarefa.desc" id="" aria-describedby="helpId" placeholder="">
                                        <small id="helpId" class="form-text text-muted">Help text</small> 
                                    </div> 

                                </div>

                                <div class="card-footer">

                                    <p v-if="tarefa.isDone==false">Não Concluída</p>
                                    <p v-else>Concluída</p>
                                </div>
                            </form>
                        
                        <button @click="marked(tarefa)" class="btn btn-success" v-if="tarefa.isDone==false" >Concluir</button>   
                        <button @click="unmarked(tarefa)" class="btn btn-success" v-else>Reabrir</button>   
                        <button @click="sumir(tarefa)" class="btn btn-danger">Deletar</button>
                        <button @click="att(tarefa)" class="btn btn-success">Atualizar</button>
                    </div>

                </div>

            </div>
        </div>

    </div>
</template>

<script>
//crindo um link com o arquivo tarefas
import TarefasAPI from '@/services/tarefas';

export default{
    name:'ListaTerafa',

    data(){
        return{
            tarefa:{
                id:'',
                task:'',
                desc:''
            },

            tarefas:[],
        }
    },

    mounted(){
        this.allTasks();
    },


    methods:{

        marked(tarefa){
            TarefasAPI.concluir_tarefa(tarefa)
        },

        unmarked(tarefa){
            TarefasAPI.reabrir_tarefa(tarefa)
        },

        att(tarefa){
            TarefasAPI.atualizar_tarefa(tarefa)
        },
        sumir(tarefa){
            TarefasAPI.apagar_tarefa(tarefa);
        },
        
        allTasks(){
            TarefasAPI.listar_tarefas()
            .then(response=>{
                this.tarefas=response.data
            })
        }
    }
}


</script>