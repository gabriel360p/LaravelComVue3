<!-- componente "master" -->

<!-- essa tag deve sempre envolver a parte gráfica -->
<template>

  <div>
    <!-- chamamando os componentes -->
    {{ teste }} 
    <CompHello/>

    <CompMetodos/>
    
    <CompDados/>

  </div>

</template>


<script>
  //importando componentes
  import CompHello from './components/Hello.vue';
  import CompDados from './components/Dados.vue';
  import CompMetodos from './components/Metodos.vue';
  // import CompProp from './components/Prop.vue';  

  export default{
    name: 'App',

    //dando visibilidade ao componente
    components:{
      CompHello,
      CompDados,
      CompMetodos,
      // CompProp,
    },

    data(){
      return{
        teste:"testando dajdkajdaslkj",
      }
    },

  }
  
</script>