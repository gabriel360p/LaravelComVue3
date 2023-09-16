
<template>
    <div class="home">
  
      <div class="container ">
  
          <div class="row text-center">
            <span class="display-5">Tarefas Concluidas:</span>
            <hr>
          </div>
  
          <div class="row ">
  
            <div class="card mt-3" v-for="tarefa in tarefas" :key="tarefa.id">
              <div class="card-header text-center"> <h3> {{ tarefa.title }} </h3> </div>
              <div class="card-body">
                <p>{{ tarefa.task }}</p>
                <p v-if="tarefa.isDone">Concluída</p>
                <p v-else>Não concluída</p>
              </div>
              <div class="card-footer">
  
                <button @click="unmarked(tarefa.id)" class="btn btn-outline-success" v-if="tarefa.isDone">Desmarcar como concluída</button>
  
                <button @click="marked(tarefa.id)" v-else href="" class="btn btn-outline-success">Marcar como concluída</button>
                
                <button @click="exlcuir(tarefa)" class="btn btn-outline-success">Deletar</button>
                
                <router-link class="btn btn-outline-success" :to="`/tarefas/${tarefa.id}`">Abrir tarefa</router-link> 
              </div>
            </div>
  
          </div>
  
      </div>
  
    </div>
  </template>
  
  <script>
  import Tarefas from '@/services/Tarefas';
  
  export default {
    name: 'MarkedsView',
    components: {
    },
  
    data(){
      return{
        tarefas:[],
      }
    },
  
    methods:{
      tasks(){
        Tarefas.listar_tarefas_concluidas()
        .then(response=>{
          this.tarefas=response.data
        })
      },
  
      exlcuir(tarefa){
        Tarefas.deletar_tarefa(tarefa);
      },
      
      marked(id){
        Tarefas.concluir_tarefa(id);
      },
  
      unmarked(id){
        Tarefas.reabrir_tarefa(id);
      },
      
    },
  
    mounted(){
      this.tasks();
    },
  
  
  }
  </script>
  