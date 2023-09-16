
<template>
  <div>

    <div class="container text-center">
      <div class="row">
        <h1 class="display-5">Ola Vue </h1>
      </div>
    </div>
    
      <hr>
      <FormTarefas/>
      <hr>
      <ListaTarefa/>
    </div>

</template>

<script>
import ListaTarefa from './components/ListaTarefas.vue';
import FormTarefas from './components/FormTarefas.vue';

export default{
  name:'App',

  components:{
    ListaTarefa,
    FormTarefas,
  },
  
}

</script>
