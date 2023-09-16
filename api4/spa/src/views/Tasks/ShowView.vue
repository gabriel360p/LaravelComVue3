<template>
    <div class="container">
        
        <div class="row ">
            <p class="display-5">Tarefa -> {{ tarefa.task }}</p>
            <hr>
        </div> 
        
        <div class="row">
            {{ tarefa.desc }}
        </div>

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
                desc:'',
            },

            id:this.$route.params.id
        }
    },

    mounted(){
        Tarefas.show_tarefa(this.id)
        .then(response=>{
            console.log(response);
            this.tarefa=response.data;
        });
    },

}   

</script>