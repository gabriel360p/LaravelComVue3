<template>
    <div class="container">
        
        <form @submit.prevent="alterar(tarefa)">

            <div class="row ">
                <p class="display-5">{{ tarefa.title }}</p>
                <div class="mb-3">
                  <label for="" class="form-label"></label>
                  <input type="text"
                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="tarefa.title">
                  <small id="helpId" class="form-text text-muted">Titulo da Tarefa</small>
                </div>
                <hr>
            </div> 
            
            <div class="row">
                {{ tarefa.task }}
                <div class="mb-3">
                  <label for="" class="form-label"></label>
                  <textarea class="form-control" name="" id="" rows="3" v-model="tarefa.task"></textarea>
                  <small id="helpId" class="form-text text-muted">Descrição da Tarefa</small>
                </div>
            </div>
            <button class="btn btn-outline-success">Salvar Alterações</button>
        </form>

    </div>
</template>

<script>
import Tarefas from "../../services/Tarefas";

export default{
    name:'ShowView',

    data(){
        return{
            tarefa:{
                id:'',
                task:'',
                title:'',
            },
            //armazenando o id que foi passado como parametro
            id:this.$route.params.id
        }
    },

    mounted(){
        //mandando o id para o servidor
        Tarefas.show_tarefa(this.id)
        .then(response=>{
            console.log(response);
            //recebendo o registro vindo do servidor
            this.tarefa=response.data;
        });
    },

    methods:{
        alterar(tarefa){
            Tarefas.atualizar_tarefa(tarefa)
            .then(response=>{
                this.tarefa=response.data;
            })
        },
    }

}   

</script>