<template>
    <div class="container">
        <form @submit.prevent="guardar()">

            <div class="mb-3">
              <label for="" class="form-label">Tarefa</label>
              <input type="text"
                class="form-control" name="task" v-model="task.task" id="" aria-describedby="helpId" placeholder="">
              <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
            </div>

            <div class="mb-3">
              <label for="" class="form-label">Descrição</label>
              <input type="text"
                class="form-control" name="desc" v-model="task.desc" id="" aria-describedby="helpId" placeholder="">
              <!-- <small id="helpId" class="form-text text-muted">Help text</small> -->
            </div>
            <button  class="btn btn-primary">Salvar</button>
        </form>
    </div>    
</template>

<script>
import TarefasAPI from '@/services/tarefas';

export default{
    name:'FormTarefas',    
    data(){
        return{
            task:{
                id:'',
                task:'',
                desc:'',
            }
        }
    },

    methods:{
        guardar(){
            TarefasAPI.salvar_tarefa(this.task);
            this.task={};
        },
        
    },
}

</script>