<template>
 <div class="home">

    <div class="container ">

        <div class="row ">
            
            <div class="card">
                <div class="card-header text-center">
                      <span class="display-5">Nova Tarefa</span>
                </div>

                <form @submit.prevent="guardar()">

                    <div class="mb-3 mt-4">
                      <label for="" class="form-label">Titulo da Tarefa</label>
                      <input type="text"
                        class="form-control" name="title" id="" v-model="tarefa.title" aria-describedby="helpId" placeholder="">

                        <div class="mb-3 mt-4">
                            <label for="" class="form-label">Tarefa</label>
                          <label for="" class="form-label"></label>
                          <textarea class="form-control" name="task" id="" v-model="tarefa.task" rows="3"></textarea>
                        </div>
                    </div>

                    <div class="card-footer text-center">
                        <button class="btn btn-primary">Salvar</button>
                    </div>

                </form>
            </div>
        </div>

    </div>

  </div>    

</template>


<script>
import Tarefas from '@/services/Tarefas';
export default{
    name:'CreateView',

    data(){
        return{
            tarefa:{
                title:'',
                task: '',
            }
        }
    },

    methods:{
        guardar(){
            Tarefas.salvar_tarefas(this.tarefa);
            this.tarefa={};
        },
    }


}
</script>